<template>
  <!-- Container for the team member card -->
  <div class="team-member-card">
    <!-- Image of the team member -->
    <img :src="imageSrc" :alt="member.name" class="member-image" />
    <div class="member-details">
      <!-- Container for the member's name and role -->
      <div class="name-role">
        <!-- Display the team member's name -->
        <h3 class="name">{{ member.name }}</h3>
        <!-- Display the team member's role -->
        <p class="role">{{ member.role }}</p>
      </div>
      <!-- Container for tags, expandable based on the 'showAllTags' state -->
      <div class="tags-container" :class="{ expanded: showAllTags }">
        <!-- Render each tag from the 'visibleTags' computed property -->
        <span v-for="(tag, index) in visibleTags" :key="index" class="tag">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    // Prop to receive the member object
    member: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showAllTags: false, // State to control whether all tags are shown
      imageSrc: '', // Source URL for the member's image
    };
  },
  computed: {
    // Compute the tags to display based on 'showAllTags' state
    visibleTags() {
      const maxTags = this.showAllTags ? this.member.tags.length : 2;
      return this.member.tags.slice(0, maxTags);
    },
    // Check if there are more than 2 tags
    hasMoreTags() {
      return this.member.tags.length > 2;
    },
  },
  methods: {
    // Method to get the image path based on the image name
    getImagePath(imageName: string | undefined) {
      if (!imageName) {
        // Default image path if no image name is provided
        return new URL(
          '../../../src/assets/pics/logo_schwarz.png',
          import.meta.url
        ).href;
      } else {
        // Path to the member's image
        return new URL(
          `../../../src/assets/pics/team/${imageName}`,
          import.meta.url
        ).href;
      }
    },
  },
  created() {
    // Set the image source when the component is created
    this.imageSrc = this.getImagePath(this.member.image);
  },
};
</script>

<style scoped>
/* Styling for the team member card container */
.team-member-card {
  display: flex; /* Use flexbox layout */
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center align children horizontally */
  border-radius: 25px; /* Rounded corners */
  padding: 10px; /* Padding inside the card */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow effect */
  background: linear-gradient(to bottom, var(--tertiary-color), #000000); /* Lila nach Schwarz
  transition: transform 0.3s; /* Smooth transform effect on hover */
  max-width: 275px; /* Maximum width of the card */
}

/* Styling for the team member's image */
.member-image {
  width: 250px; /* Fixed width for the image */
  height: auto; /* Maintain aspect ratio */
  border-radius: 20px; /* Rounded corners for the image */
  margin-bottom: 10px; /* Space below the image */
}

/* Styling for the details section of the card */
.member-details {
  text-align: center; /* Center align text */
}

/* Styling for the name and role container */
.name-role {
  margin-bottom: 10px; /* Space below the name-role container */
}

/* Styling for the team member's name */
.name {
  font-weight: bold; /* Bold text */
  margin: 0; /* Remove default margin */
}

/* Styling for the team member's role */
.role {
  margin: 0; /* Remove default margin */
  color: var(--background-color); /* Color for the role text */
}

/* Container for the tags */
.tags-container {
  display: flex; /* Use flexbox layout */
  align-items: center; /* Center align tags vertically */
  justify-content: center; /* Center align tags horizontally */
  gap: 5px; /* Space between tags */
  overflow: hidden; /* Hide overflow if tags are too many */
}

/* Styling for each tag */
.tag {
  background-color: var(--secondary-color); /* Background color of the tag */
  color: var(--primary-color); /* Text color of the tag */
  padding: 2px 5px; /* Padding inside the tag */
  border-radius: 3px; /* Rounded corners */
  font-size: 12px; /* Font size of the tag text */
  cursor: pointer; /* Pointer cursor on hover */
  display: inline-block; /* Inline block display for tags */
}

/* Hover effect for the team member card */
.team-member-card:hover {
  transform: scale(1.03); /* Slightly scale up the card */
}
</style>
