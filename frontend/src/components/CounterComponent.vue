<template>
  <!-- Display the formatted counter value -->
  <div class="counter">{{ formattedValue }}</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'; // Import Vue's reactivity and lifecycle hooks

// Reactive reference to hold the current counter value
const value = ref(0);

// The final value the counter should reach
const endValue = 3000;

// Duration in milliseconds for the counter animation to complete
const duration = 2000; 

// Delay in milliseconds before the counter starts incrementing
const delay = 1000; 

// Suffix to append to the counter value (e.g., "M" for millions)
const suffix = 'M';

/**
 * Function to increment the counter value smoothly over the specified duration.
 */
const increment = () => {
  const startTime = Date.now(); // Capture the start time of the counter
  const endTime = startTime + duration; // Calculate the end time based on the duration

  /**
   * Recursive function that updates the counter value based on elapsed time.
   */
  const step = () => {
    const now = Date.now(); // Get the current time
    const progress = Math.min((now - startTime) / duration, 1); // Calculate progress as a fraction of the duration
    value.value = Math.floor(progress * endValue); // Update the counter value based on progress

    // If the progress is less than 100%, request the next animation frame
    if (progress < 1) {
      requestAnimationFrame(step); // Calls step recursively until the progress reaches 100%
    }
  };

  step(); // Start the counter increment
};

/**
 * Function to start the counter after a specified delay.
 */
const startCounter = () => {
  setTimeout(() => {
    increment(); // Start the incrementing function after the delay
  }, delay);
};

// Lifecycle hook that runs when the component is mounted
onMounted(() => {
  startCounter(); // Initiates the counter when the component is first rendered
});

// Computed property that formats the counter value by appending the suffix
const formattedValue = computed(() => `${value.value}${suffix}`);
</script>

<style scoped>
/* Styling for the counter display */
.counter {
  font-size: 25vh; /* Large font size for visibility */
  font-weight: bold; /* Bold text for emphasis */
  color: var(--secondary-color) !important; /* Gold color for the counter text */
  z-index: 50; /* High z-index to ensure it appears above other elements */
}
</style>
