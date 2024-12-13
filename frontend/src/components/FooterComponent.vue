<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Left Section: Logo and Address -->
      <div class="footer-left">
        <!-- SundSpace logo with alt text for accessibility -->
        <img
          src="/public/assets/images/logo_schwarz.png"
          alt="SundSpace Logo"
          class="footer-logo"
        />
        <!-- Address block for SundSpace -->
        <address class="footer-address">
          <strong>SUNDSPACE e.V.</strong><br />
          Zur Schwedenschanze 15<br />
          18435 Stralsund
        </address>
      </div>

      <!-- Right Section: Navigation Links -->
      <div class="footer-right">
        <h3>Internes</h3>
        <ul class="footer-nav">
          <!-- Navigation links using Vue Router for internal navigation -->
          <li>
            <router-link to="/impressum" exact-active-class="active">
              Impressum
            </router-link>
          </li>
          <li>
            <router-link to="/datenschutzerklaerung" exact-active-class="active">
              Datenschutzerklärung
            </router-link>
          </li>
          <li>
            <router-link to="/sponsoring" exact-active-class="active">
              Sponsoren
            </router-link>
          </li>
          <li>
            <router-link to="/kontakt" exact-active-class="active">
              Kontakt
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent', // Name of the component for easy identification and reusability
};
</script>

<style scoped>
/* Main footer styles */
.footer {
  border-top: solid 2px var(--secondary-color); /* Gold border line for separation */
  background-color: #000; /* Black background */
  color: var(--text-color); /* White text color */
  padding: 2rem; /* Padding around the footer */
  display: flex;
  justify-content: center; /* Centers the footer content horizontally */
}

/* Container for the footer content */
.footer-content {
  display: flex; /* Flex layout for horizontal alignment of sections */
  justify-content: space-between; /* Space between the left and right sections */
  align-items: center; /* Vertical centering of items */
  width: 100%;
  max-width: 1200px; /* Restrict the maximum width for the content */
}

/* Left side containing logo and address */
.footer-left,
.footer-right {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  text-align: center; /* Center text */
}

/* Specific padding for left and right sections */
.footer-left {
  padding-left: 5rem; /* Padding on the left for spacing */
}

.footer-right {
  padding-right: 5rem; /* Padding on the right for spacing */
}

/* Style for the logo */
.footer-logo {
  width: 20rem; /* Set width of the logo */
  margin-bottom: 1rem; /* Margin below the logo for spacing */
}

/* Address block styling */
.footer-address {
  font-size: 1rem; /* Font size for readability */
  line-height: 1.5; /* Line height for spacing between lines */
}

/* Heading style for the right section */
.footer-right h3 {
  font-size: 1.5rem; /* Larger font for section headings */
  margin-bottom: 1rem; /* Margin below heading for spacing */
}

/* Styles for the navigation list */
.footer-nav {
  list-style: none; /* Remove default list styling */
  padding: 0; /* No padding around the list */
}

/* Individual list item styling */
.footer-nav li {
  margin-bottom: 0.5rem; /* Space between list items */
  position: relative; /* Positioning for potential pseudo-elements */
}

/* Link styles within the footer */
.footer-nav a {
  color: var(--tertiary-color); /* Link color to match the theme */
  text-decoration: none; /* Remove underline from links */
  font-size: 1rem; /* Font size for links */
  transition: color 0.3s; /* Smooth transition for hover effects */
}
</style>
