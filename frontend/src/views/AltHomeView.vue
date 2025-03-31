<template>
  <main>
    <div class="parent">
      <!-- Splash screen section that includes Hyperdrive and Counter components -->
      <div class="splash-screen">
        <Hyperdrive></Hyperdrive>
        <Counter />
        <!-- Render the Counter component -->
      </div>
      <!-- Feed container displaying a list of FeedItem components -->
      <div class="feed-container">
        <FeedItem
          v-for="(feed, index) in feeds"
          :key="index"
          :feed="feed"
          :index="index"
          :is-expanded="isExpanded[index]"
          @toggle-expand="toggleExpand(index)"
        />
      </div>
      <!-- Footer section with a link to Instagram -->
      <div class="footer">
        <a
          class="insta-button"
          href="https://www.instagram.com/sund.space/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MEHR BEITRÄGE FINDEST DU HIER
        </a>
      </div>
      <!-- Rocket element that remains fixed on the page -->
      <div class="rocket-element">
        <Rocket v-if="rocketLoaded" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'; // Import Vue's ref function for reactive variables
import Counter from '../components/CounterComponent.vue'; // Import Counter component
import feedData from '../../../src/assets/json/feed.json'; // Import feed data from a JSON file
import FeedItem from '../components/FeedItemComponent.vue'; // Import FeedItem component
import Rocket from '../components/RocketComponent.vue'; // Import Rocket component
import Hyperdrive from '../components/HyperdriveComponent.vue'; // Import Hyperdrive component

// Define reactive variables
const feeds = ref(feedData); // Feed items data
const isExpanded = ref(new Array(feeds.value.length).fill(false)); // Track expanded state of feed items
const rocketLoaded = ref(false); // Track Rocket component's load state

const fetchInstagramPosts = async () => {
  try {
    const response = await fetch(
      `https://graph.instagra,.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&limit=5&access_token=`
    );
    const data = await response.json();
    feeds.value = data.data;
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
  }
};

// Function to get the path of images dynamically
const getImagePath = (imageName: string) => {
  return new URL(`../../../src/assets/pics/${imageName}`, import.meta.url).href;
};

// Function to toggle the expanded state of a feed item
const toggleExpand = (index: number) => {
  isExpanded.value[index] = !isExpanded.value[index];
};

// Reload the Rocket component after other components are loaded
onMounted(async () => {
  await fetchInstagramPosts();
  // Wait for all other components and DOM to finish rendering
  await nextTick();

  // Optionally, delay further to allow media (images, assets) to fully load
  setTimeout(() => {
    rocketLoaded.value = true;
  }, 100); // Adjust the delay based on observed behavior
});
</script>

<style scoped>
.parent {
  display: grid; /* Use CSS Grid for layout */
  grid-template-columns: repeat(3, 1fr); /* Create three equal columns */
  grid-auto-rows: auto; /* Automatically adjust row height */
  gap: 16px; /* Space between grid items */
}

/* Styling for the splash screen section, covering the full viewport height */
.splash-screen {
  grid-column: span 3; /* Span across all three columns */
  height: 100vh; /* Full viewport height */
  display: flex; /* Flexbox layout for centering content */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  background: transparent; /* Transparent background */
}

/* Styling for the container holding feed items */
.feed-container {
  grid-column: span 2; /* Span across the first two columns */
  display: flex; /* Flexbox layout for column direction */
  flex-direction: column; /* Arrange feed items in a column */
  gap: 16px; /* Space between feed items */
}

/* Styling for the footer section */
.footer {
  grid-column: span 3; /* Span across all three columns */
  display: flex; /* Flexbox layout for centering content */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  height: 100px; /* Fixed height */
}

/* Styling for the rocket element that stays fixed in the viewport */
.rocket-element {
  grid-column: 3; /* Position in the third column */
  grid-row: 2 / span 5; /* Span vertically from row 2 to 5 */
  display: flex; /* Flexbox layout for centering content */
  justify-content: center; /* Center content horizontally */
  align-items: flex-start; /* Align content at the top */
  max-width: 25vw; /* Maximum width relative to viewport width */
  overflow: hidden; /* Hide overflow */
  position: sticky; /* Sticky positioning to stay in view */
  top: 20px; /* Offset from the top of the viewport */
}

/* Styling for the Instagram button */
.insta-button {
  display: inline-flex; /* Flexbox layout for alignment */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  background-color: var(--tertiary-color); /* Background color */
  border: none; /* Remove border */
  border-radius: 20px; /* Rounded corners */
  width: 300px; /* Fixed width */
  height: 50px; /* Fixed height */
  color: var(--text-color); /* Text color */
  font-size: 16px; /* Font size */
  text-decoration: none; /* Remove underline */
  transition: backgroundr 1s ease-in-out; /* Smooth transition for background color change */
}

/* Hover effect for the Instagram button */
.insta-button:hover {
  /* background: linear-gradient(45deg, var(--tertiary-color), var(--secondary-color));*/ /* Change background color on hover */
  background: linear-gradient(to right, var(--red-hst), var(--violet-hst), var(--blue-hst));
}
</style>
