<template>
  <!-- Container for the starfield effect -->
  <div class="stars">
    <!-- Create a star element for each item in the stars array -->
    <div v-for="(star, index) in stars" :key="index"
         class="star"
         :style="{
           '--x': `${star.x}px`, /* Horizontal position of the star */
           '--y': `${star.y}px`, /* Vertical position of the star */
           '--delay': `${star.delay}s`, /* Delay before the star animation starts */
           '--duration': `${star.duration}s`, /* Duration of the star animation */
         }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Number of stars to be generated
const starCount = 100;

// Reactive array to store star properties
const stars = ref([]);

// Function to generate random properties for stars
const generateStars = () => {
  stars.value = Array.from({ length: starCount }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: (Math.random() * 2).toFixed(2),
    duration: (Math.random() + 0.25).toFixed(2),
  }));
};

// Generate stars when the component is mounted
onMounted(() => {
  generateStars();
});
</script>

<style scoped>
/* Container styles for the starfield effect */
.stars {
  position: absolute; /* Position container absolutely to cover the viewport */
  top: 0;
  left: 0;
  width: 100%; /* Full width of the viewport */
  height: 100%; /* Full height of the viewport */
  perspective: 1000px; /* Create a 3D space for animation */
  overflow: hidden; /* Hide any overflow */
  z-index: 5; /* Ensure stars are above other content */
}

/* Styles for individual stars */
.star {
  position: absolute; /* Position stars absolutely within the container */
  width: 6px; /* Size of the star */
  height: 6px; /* Size of the star */
  background: var(--text-color); /* Color of the star */
  opacity: 1; /* Full opacity */
  transform-origin: center center; /* Animation origin at the center of the star */
  border-radius: 50%; /* Make star round */
  left: var(--x); /* Use CSS variable for horizontal position */
  top: var(--y); /* Use CSS variable for vertical position */
  animation: hyperdrive var(--duration) linear infinite;
}

/* Keyframes for the hyperdrive animation */
@keyframes hyperdrive {
  0% {
    transform: translateZ(0) scale(2); /* Initial state: closer and larger */
  }
  100% {
    transform: translateZ(-1000px) scale(0); /* Final state: farther away and smaller */
  }
}
</style>
