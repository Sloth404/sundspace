<template>
  <div class="contact-info">
    <!-- Section header -->
    <h2>Kontaktiere Uns</h2>

    <!-- Contact information item for address -->
    <div class="info-item">
      <i class="fas fa-map-marker-alt"></i> <!-- FontAwesome icon for location -->
      <p>
        <!-- Link to open Google Maps with the address -->
        <a :href="mapsLink" target="_blank" rel="noopener">{{ address }}</a>
      </p>
    </div>

    <!-- Contact information item for email -->
    <div class="info-item">
      <i class="fas fa-envelope"></i> <!-- FontAwesome icon for email -->
      <p>
        <!-- Mailto link to open default email client -->
        <a :href="'mailto:' + email">{{ email }}</a>
      </p>
    </div>

    <!-- Contact information item for Instagram -->
    <div class="info-item">
      <i class="fab fa-instagram"></i> <!-- FontAwesome icon for Instagram -->
      <p>
        <!-- Link to the Instagram profile -->
        <a :href="instagramLink" target="_blank" rel="noopener">{{ instagramHandle }}</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome for icons

export default {
  name: 'ContactComponent', // Component name
  data() {
    return {
      // Contact details and links
      address: 'Zur Schwedenschanze 15, 18435 Stralsund', // Physical address
      email: 'sundspace@hochschule-stralsund.de', // Contact email
      instagramHandle: '@sundspace', // Instagram handle
      instagramLink: 'https://www.instagram.com/sund.space', // Link to Instagram profile
      mapsLink: 'https://www.google.de/maps/place/Zur+Schwedenschanze+15,+18435+Stralsund' // Google Maps link to the address
    };
  }
};
</script>

<style scoped lang="css">
/* Main container for the contact info section */
.contact-info {
  position: relative; /* Allows stacking context for overlapping elements */
  max-width: 500px; /* Limits the width of the contact section */
  margin: 0 auto; /* Centers the section horizontally */
  padding: 1rem; /* Inner padding for spacing */
  background-color: rgba(39, 39, 39, 0.75); /* Semi-transparent dark background */
  border-radius: 8px; /* Rounded corners */
  text-align: left; /* Aligns text to the left */
  z-index: 10; /* Ensures it appears above other elements like a splash screen */
  backdrop-filter: blur(10px); /* Optional blur effect for a frosted glass look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow to lift the section off the background */
  margin-top: 20vh; /* Adds top margin to vertically center the section */
}

/* Styles for the section header */
h2 {
  text-align: center; /* Centers the heading text */
  margin-bottom: 1.5rem; /* Adds space below the heading */
  font-weight: bold; /* Bold font for emphasis */
  font-size: 1.5rem; /* Sets the font size */
  color: var(--secondary-color); /* Gold color for the heading */
}

/* Container for individual contact info items */
.info-item {
  display: flex; /* Flexbox for horizontal alignment of icon and text */
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Aligns content vertically */
  margin-bottom: 1rem; /* Space between items */
}

/* Styles for icons within the contact info items */
.info-item i {
  font-size: 1.5rem; /* Sets icon size */
  margin-right: 1rem; /* Space between icon and text */
  color: black; /* Sets icon color */
}

/* Styles for paragraph text within the contact info items */
p {
  margin: 0; /* Removes default paragraph margin */
  font-size: 1rem; /* Sets the font size */
}

/* Styles for links within the contact info items */
a {
  color: var(--tertiary-color); /* Sets link color to blue */
  text-decoration: none; /* Removes underline from links */
}

/* Hover effect for links */
a:hover {
  text-decoration: underline; /* Adds underline on hover */
}
</style>
