<template>
  <div class="container">
    <!-- Splash screen displaying the banner image -->
    <div class="splash-screen">
      <img :src="banner" alt="Sundspace Team Banner" />
    </div>
    <!-- Wrapper for the main content, which includes the ContactComponent -->
    <div class="content-wrapper">
      <ContactComponent />
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS for icons
import banner from '../../../src/assets/pics/sundspace-team-banner.png'; // Import banner image
import ContactComponent from '../components/ContactComponent.vue'; // Import the ContactComponent

export default {
  data() {
    return {
      // Contact details and links
      address: 'Zur Schwedenschanze 15, 18435 Stralsund',
      email: 'sundspace@hochschule-stralsund.de',
      instagramHandle: '@sundspace',
      instagramLink: 'https://www.instagram.com/sund.space',
      mapsLink: 'https://www.google.de/maps/place/Zur+Schwedenschanze+15,+18435+Stralsund',
      banner, // Banner image source
    };
  },
  components: {
    ContactComponent // Register the ContactComponent
  }
};
</script>

<style scoped>
.container {
  position: relative; /* Position container relatively for child absolute positioning */
  min-height: 100vh; /* Ensure container covers full viewport height */
}

/* Styling for the splash screen, which holds the banner image */
.splash-screen {
  position: absolute; /* Absolute positioning to cover part of the container */
  top: 0;
  left: 0;
  width: 100%; /* Full width of the container */
  height: 50vh; /* Half of the viewport height */
  display: flex; /* Flexbox layout to center the image */
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
  overflow: hidden; /* Hide overflow to keep the image clean */
  z-index: 0; /* Place behind other content */
}

/* Styling for the banner image within the splash screen */
.splash-screen img {
  width: 90vw; /* Responsive width relative to viewport width */
  height: auto; /* Maintain aspect ratio of the image */
  object-fit: cover; /* Cover the splash screen area */
}

/* Pseudo-element for a gradient blur effect over the splash screen */
.splash-screen::before {
  content: ''; /* No text content for the pseudo-element */
  position: absolute; /* Position it absolutely within the splash screen */
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%; /* Height of the gradient effect */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1), /* Dark to transparent gradient */
    transparent
  ); /* Gradient to blend the bottom of the image */
  filter: blur(10px); /* Apply blur effect */
  pointer-events: none; /* Prevent interaction with the pseudo-element */
  z-index: 1; /* Ensure it is above the image */
}

/* Wrapper for content positioned below the splash screen */
.content-wrapper {
  position: relative; /* Relative positioning within the container */
  top: 20rem; /* Space from the top, positioning content below the splash screen */
}
</style>
