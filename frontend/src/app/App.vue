<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'; // Imports for handling routing in the application
// import ConfirmationComponent from '../components/ConfirmationComponent.vue'; // Component that displays confirmation messages
import Navbar from '../components/NavBarComponent.vue'; // Navigation bar component
import Footer from '../components/FooterComponent.vue'; // Footer component
import { computed } from 'vue'; // Vue's reactivity system for computed properties
import { useStore } from 'vuex'; // Vuex store for state management

const store = useStore(); // Access the Vuex store instance
const showConfirmation = computed(() => store.getters.showConfirmation); 
// Computed property that tracks the `showConfirmation` state from the Vuex store.
// This will be true if a confirmation message should be shown, otherwise false.
</script>

<template>
  <!-- Renders the ConfirmationComponent, which is responsible for showing confirmation messages -->
  <!-- <ConfirmationComponent /> -->

  <!-- Main content container with a conditional class for blurring when a confirmation is shown -->
  <div :class="{ 'app-content-blur': showConfirmation }" id="app-content">
    <header>
      <!-- Navbar component placed in the header -->
      <Navbar></Navbar>
    </header>

    <!-- RouterView renders the matched component for the current route -->
    <RouterView />

    <!-- Breaker div to create space or a break between the content and footer -->
    <div class="breaker"></div>

    <!-- Footer component rendered at the bottom of the page -->
    <Footer></Footer>
  </div>
</template>

<style scoped lang="css">
/* Styles for blurring the app content when a confirmation message is visible */
.app-content-blur {
  filter: blur(5px); /* Applies a blur effect */
  transition: filter 0.5s ease-in-out; /* Smooth transition for the blur effect */
}

/* Ensures the main content area takes up at least the full height of the viewport */
#app-content {
  min-height: 100vh;
}

/* Provides space between elements, used as a separator */
.breaker {
  height: 10rem;
}

/* Styles for the header, centering its contents */
header {
  display: flex;
  justify-content: center; /* Centers child elements horizontally */
  align-items: center; /* Centers child elements vertically */
  padding: 0 1rem; /* Adds padding on the sides */
  max-width: 100%;
}

/* Styles for the navigation links within the navbar */
nav > a {
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Media query for styling adjustments on wider screens (768px and above) */
@media (min-width: 768px) {
  header {
    padding: 0 2rem; /* Increases padding on larger screens */
    margin: 0 auto; /* Centers the header */
  }

  nav {
    text-align: left; /* Aligns text to the left */
    font-size: 1rem; /* Sets the font size */
    padding: 1rem 1rem; /* Adds padding inside the nav */
    margin-top: 1rem; /* Adds a margin at the top */
  }
}
</style>
