<template>
  <!-- Overlay container that covers the entire viewport -->
  <div class="overlay" @click.self="closeOverlay">
    <!-- Overlay content that contains the profile details -->
    <div class="overlay-content" @click.stop>
      <!-- Profile image of the team member -->
      <img :src="imageSrc" alt="Profile picture" class="profile-image" />
      <div class="profile-info">
        <!-- Header section with the team member's name and role -->
        <div class="info-header">
          <h3>{{ member.name }}</h3>
          <p>{{ member.role }}</p>
        </div>
        <!-- Tags section -->
        <div class="tags">
          <div class="tags-container">
            <!-- Render each tag from 'visibleTags' computed property -->
            <span
              v-for="(tag, index) in visibleTags"
              :key="index"
              class="tag"
              >{{ tag }}</span
            >
          </div>
        </div>
        <!-- Description of the team member -->
        <p class="description">{{ member.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    // Prop to receive the member object with details
    member: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showAllTags: false, // State to toggle the visibility of all tags
      imageSrc: '', // Source URL for the team member's image
    };
  },
  computed: {
    // Compute the tags to display, limited to 9 unless 'showAllTags' is true
    visibleTags() {
      const maxTags = 9;
      return this.showAllTags
        ? this.member.tags
        : this.member.tags.slice(0, maxTags);
    },
    // Check if there are more than 9 tags
    hasMoreTags() {
      return this.member.tags.length > 9;
    },
  },
  methods: {
    // Method to generate the image path based on the provided image name
    getImagePath(imageName: string | undefined) {
      console.log(imageName); // Log image name for debugging
      if (!imageName) {
        // Return default image path if no image name is provided
        return new URL(
          '../../../src/assets/pics/logo_schwarz.png',
          import.meta.url
        ).href;
      } else {
        // Return the path to the member's image
        return new URL(
          `../../../src/assets/pics/team/${imageName}`,
          import.meta.url
        ).href;
      }
    },
    // Emit a 'close' event to indicate that the overlay should be closed
    closeOverlay() {
      this.$emit('close');
    },
    // Toggle the visibility of all tags
    toggleTags() {
      this.showAllTags = !this.showAllTags;
    },
  },
  created() {
    // Set the image source when the component is created
    this.imageSrc = this.getImagePath(this.member.image);
  },
};
</script>

<style scoped>
/* Styling for the overlay container */
.overlay {
  position: fixed; /* Fixed positioning to cover the entire viewport */
  top: 0;
  left: 0;
  width: 100vw; /* Full width of the viewport */
  height: 100vh; /* Full height of the viewport */
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
  display: flex; /* Flexbox layout to center content */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  z-index: 1000; /* Ensure overlay is above other content */
}

/* Styling for the content inside the overlay */
.overlay-content {
  background: var(--background-color); /* Dark background for the content */
  padding: 20px; /* Padding inside the content */
  border-radius: 5px; /* Rounded corners */
  max-width: 1000px; /* Maximum width of the content */
  width: 100%; /* Full width within the maximum limit */
  max-height: 80vh; /* Maximum height of the content */
  display: flex; /* Flexbox layout for horizontal alignment */
  flex-direction: row; /* Arrange children in a row */
}

/* Styling for the profile image */
.profile-image {
  width: 50%; /* Half width of the overlay-content */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Cover the container while preserving aspect ratio */
}

/* Styling for the profile information section */
.profile-info {
  width: 50%; /* Half width of the overlay-content */
  padding: 0 20px; /* Horizontal padding */
  display: flex; /* Flexbox layout */
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center content vertically */
}

/* Styling for the header section within profile-info */
.info-header {
  margin-bottom: 15px; /* Space below the header */
}

/* Styling for the member's name */
.profile-info h3 {
  margin: 0; /* Remove default margin */
  font-size: 1.5em; /* Increase font size */
}

/* Styling for the member's role */
.profile-info p {
  margin: 5px 0 0; /* Top margin for spacing */
  color: var(--background-color); /* Light gray color */
}

/* Styling for the tags section */
.tags {
  margin-top: 15px; /* Space above the tags section */
}

/* Container for tags, with wrap and gap settings */
.tags-container {
  display: flex; /* Flexbox layout */
  flex-wrap: wrap; /* Wrap tags to the next line */
  gap: 5px; /* Space between tags */
}

/* Expanded class for tags-container to adjust height when expanded */
.tags-container.expanded {
  max-height: none; /* Remove height restriction */
}

/* Styling for each tag */
.tag {
  background-color: var(--glossy-effect); /* Dark background color for tags */
  color: var(--text-color); /* White text color */
  padding: 2px 5px; /* Padding inside the tag */
  border-radius: 3px; /* Rounded corners */
  font-size: 12px; /* Small font size */
}

/* Styling for the toggle tags button (if used) */
.toggle-tags-btn {
  background: none; /* No background for the button */
  border: none; /* No border */
  color: var(--tertiary-color); /* Blue color for text */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 14px; /* Font size for the button */
  margin-top: 10px; /* Space above the button */
}

/* Styling for the description text */
.description {
  margin-top: 20px; /* Space above the description */
}
</style>
