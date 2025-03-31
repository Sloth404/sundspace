<template>
  <!-- Main container for the feed item, dynamically setting classes and styles based on props -->
  <div :class="['feed-item', `feed-${index + 1}`]" :style="expandedStyle">
    <div class="image-container">
      <img v-if="feed.media_type === 'IMAGE'" :src="feed.media_url" :alt="feed.caption" />
      <video v-if="feed.media_type === 'VIDEO'" :src="feed.media_url" :alt="feed.caption" />
      <div v-if="feed.media_type === 'CAROUSEL_ALBUM'">
        <img v-for="(item, i) in feed.children" :key="i" :src="item.media_url" :alt="item.caption" />
      </div>
    </div>
    <div
      :class="['card', cardColor, localIsExpanded ? 'expanded' : '']"
      :style="cardStyle"
      ref="cardRef"
    >
      <!-- Text content of the feed, truncated if not expanded -->
      <p>
        {{ localIsExpanded ? feed.caption : feed.caption.slice(0, 300) }}
        <span v-if="!localIsExpanded && feed.caption.length > 300">...</span>
      </p>
      <!-- Button to toggle expanded state if the text length exceeds 300 characters -->
      <button
        v-if="feed.text.length > 300"
        class="expand-button"
        @click="toggleExpand"
      >
        {{ localIsExpanded ? 'Zuklappen' : 'Lies mehr' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref, watch, nextTick, onMounted } from 'vue';

// Define the component props, including the feed object, index for styling, and initial expanded state
const props = defineProps({
  feed: Object,  // The feed object containing image and text data
  index: Number, // Index to determine styles (e.g., alternating colors)
  isExpanded: Boolean, // Prop to control if the item should be expanded initially
});

// Local reactive state to control expanded view
const localIsExpanded = ref(props.isExpanded);

// Reference to the card element for manipulating its height
const cardRef = ref(null);

// Computed property to set the card color based on the index (alternating colors)
const cardColor = computed(() => (props.index % 2 === 0 ? 'yellow' : 'purple'));

// Computed property to adjust styles when expanded
const expandedStyle = computed(() => ({
  marginBottom: localIsExpanded.value ? '2rem' : '1rem',
}));

// Reactive style object for the card, initialized with a default height and transition
const cardStyle = ref({
  height: '150px',
  transition: 'height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)', // Smooth transition for expanding/collapsing
});

// Function to update the card's height dynamically based on its content
const updateHeight = async () => {
  await nextTick(); // Wait for DOM updates
  const cardElement = cardRef.value;
  if (cardElement) {
    // Set height based on the content's scroll height if expanded, else set to default height
    cardStyle.value.height = localIsExpanded.value ? `${cardElement.scrollHeight}px` : '150px';
  }
};

// Function to toggle the expanded state of the card and adjust height accordingly
const toggleExpand = () => {
  localIsExpanded.value = !localIsExpanded.value;
  updateHeight(); // Update the height based on new state
};

// Watcher to respond to changes in the `isExpanded` prop and update the local state
watch(
  () => props.isExpanded,
  (newVal) => {
    localIsExpanded.value = newVal;
    updateHeight();
  }
);

// Lifecycle hook to set initial height of the card once the component is mounted
onMounted(() => {
  updateHeight();
});

// Function to dynamically generate the correct image path based on the provided image name
const getImagePath = (imageName) => {
  return new URL(`../../../src/assets/pics/${imageName}`, import.meta.url).href;
};
</script>

<style scoped>
/* Main container for the feed item */
.feed-item {
  position: relative; /* Position relative to allow absolute positioning of child elements */
  grid-column: span 2; /* Adjusts item size in grid layout */
  margin-left: 10rem; /* Left margin for alignment */
  display: flex; /* Flexbox layout for inner elements */
  flex-direction: column; /* Aligns children vertically */
  align-items: flex-start; /* Aligns items to the start of the flex container */
}

/* Container for the image */
.image-container {
  width: 100%; /* Full width */
  max-width: 80%; /* Maximum width for responsive design */
  position: relative; /* Relative positioning for any overlays or absolute positioned children */
}

/* Styles for the image */
img {
  width: 100%; /* Image fills the container */
  height: auto; /* Maintains aspect ratio */
  border-radius: 20px; /* Rounded corners */
  object-fit: cover; /* Ensures image covers the area */
  z-index: 1; /* Positioning to keep image below other content */
}

/* Card styles */
.card {
  position: relative; /* Allows child positioning within */
  border-radius: 20px; /* Rounded corners for the card */
  padding: 20px; /* Inner padding */
  margin-left: 5rem; /* Left margin for positioning */
  width: calc(100% - 10rem); /* Width calculated to account for margins */
  margin-top: -2.5rem; /* Negative top margin for overlapping effect */
  z-index: 999; /* High z-index to bring above other content */
  overflow: hidden; /* Ensures content does not overflow the card bounds */
  background-color: var(--glossy-effect);
  backdrop-filter: blur(10px);
  transition: height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smooth height transition */
}

/* Style for expanded card */
.card.expanded {
  height: auto; /* Allows card to expand to fit content */
}

/* Styles for the expand button */
.expand-button {
  position: absolute; /* Absolute positioning within the card */
  bottom: 10px; /* Positioned near the bottom */
  right: 10px; /* Positioned near the right edge */
  background-color: transparent; /* Transparent background */
  border: none; /* No border */
  padding: 5px 10px; /* Padding for clickable area */
  cursor: pointer; /* Pointer cursor on hover */
  z-index: 1000; /* High z-index for visibility */
  color: var(--tertiary-color); /* Blue text color */
  margin-top: 10px; /* Top margin for spacing */
}

/* Paragraph styling inside the card */
.card p {
  margin-bottom: 30px; /* Bottom margin for spacing */
}

/* Color classes for alternating card colors */

</style>
