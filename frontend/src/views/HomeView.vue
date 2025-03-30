<template>
  <main>
    <div class="parent">
      <!-- Splash screen section that includes Hyperdrive and Counter components -->
      <div class="splash-screen">
        <Hyperdrive></Hyperdrive>
        <div class="logo-counter">
          <img src="src/assets/pics/logo_schwarz.png">
          <Counter />
        </div>
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

.logo-counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.logo-counter img {
  max-height: 20rem;
  max-width: 20rem;
  margin-bottom: -3rem;
  opacity: 0;
  transform: scale(0.9);
  animation: fadeIn 1.5s ease-out forwards;
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

.insta-button {
  position: relative;
  overflow: hidden; /* Verhindert das Überlaufen des Pseudo-Elements */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--tertiary-color); /* Standard-Hintergrund */
  border: none;
  border-radius: 20px;
  width: 300px;
  height: 50px;
  color: var(--text-color);
  font-size: 16px;
  text-decoration: none;
  transition: color 0.3s ease-in-out; /* Sanfte Farbänderung für den Text */
  z-index: 1;
}

/* Pseudo-Element für den animierten Farbverlauf */
.insta-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, var(--orange), black); /* Verlauf von unten nach oben */
  transform: translateY(100%); /* Startet außerhalb des Buttons (unten) */
  transition: transform 0.5s ease-in-out; /* Weiche Animation */
  z-index: -1; /* Hinter dem Button-Text */
}

/* Hover: Farbverlauf bewegt sich von unten nach oben */
.insta-button:hover::before {
  transform: translateY(0);
}
</style>
