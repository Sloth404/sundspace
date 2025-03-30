<template>
  <!-- Navigation container with dynamic classes based on the component's state -->
  <div
    ref="navDiv" 
    class="navDiv"
    :class="{ expanded: isExpanded, fixed: isFixed }" 
  >
    <nav class="navMenu">  <!-- Navigation menu -->
      <!-- RouterLinks define navigation links to different routes within the application -->
      <RouterLink to="/" exact-active-class="router-link-active" exact>
        Start
      </RouterLink>
      <RouterLink to="/team" active-class="router-link-active">
        Team
      </RouterLink>
      <RouterLink to="/rakete" active-class="router-link-active">
        Rakete
      </RouterLink>
      <RouterLink to="/wettbewerb" active-class="router-link-active">
        Wettbewerb
      </RouterLink>
      <RouterLink to="/sponsoring" active-class="router-link-active">
        Sponsoring
      </RouterLink>
      <RouterLink to="/kontakt" active-class="router-link-active">
        Kontakt
      </RouterLink>
      <!-- Dot element for highlighting navigation items -->
      <div ref="dot" class="dot"></div>
    </nav>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    // Reactive references to DOM elements and state variables
    const navDiv = ref<HTMLElement | null>(null);  // Reference to the navigation container element
    const dot = ref<HTMLElement | null>(null);  // Reference to the dot element for highlighting
    const isExpanded = ref(false);  // State for navigation expansion
    const isFixed = ref(false);  // State for fixed positioning

    // Method to update the dot's position based on the hovered navigation item
    const updateDotPosition = () => {
      const menu = navDiv.value?.querySelector('.navMenu') as HTMLElement;
      const items = menu ? Array.from(menu.querySelectorAll('a')) : [];  // Get all navigation links
      const hoveredItem = items.find((item) => item.matches(':hover'));  // Find the hovered item

      if (hoveredItem && dot.value) {
        const itemWidth = hoveredItem.offsetWidth;  // Width of the hovered item
        const itemPosition = hoveredItem.offsetLeft;  // Position of the hovered item
        dot.value.style.transform = `translateX(${
          itemPosition + itemWidth / 2
        }px)`;  // Move dot to center under the hovered item
        dot.value.style.opacity = '1';  // Make the dot visible
      }
    };

    // Method to handle the scroll event and adjust navigation state
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;  // Get the current scroll position

      // Update the isExpanded state based on scroll position
      if (scrollTop > 0) {
        isExpanded.value = true;
      } else {
        isExpanded.value = false;
      }

      // Update the isFixed state based on the position of the navigation container
      if (navDiv.value) {
        if (isExpanded.value && scrollTop >= navDiv.value.offsetTop) {
          isFixed.value = true;
        } else {
          isFixed.value = false;
        }
      }
    };

    // Setup event listeners when the component is mounted
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);  // Add scroll event listener

      const menu = navDiv.value?.querySelector('.navMenu') as HTMLElement;
      const items = menu ? Array.from(menu.querySelectorAll('a')) : [];  // Get all navigation links

      items.forEach((item) => {
        item.addEventListener('mouseover', updateDotPosition);  // Update dot position on hover
        item.addEventListener('mouseleave', () => {
          if (dot.value) {
            dot.value.style.opacity = '0';  // Hide the dot when mouse leaves
          }
        });
      });

      if (dot.value) {
        dot.value.style.transition =
          'transform 0.2s ease-in-out, opacity 0.2s ease-in-out';  // Smooth transition for dot movement and visibility
      }
    });

    // Remove the event listener before the component is unmounted
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    // Return the reactive references to be used in the template
    return {
      navDiv,
      dot,
      isExpanded,
      isFixed,
    };
  },
};
</script>

<style scoped>
/* Imports the Montserrat font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

/* General CSS resets for box model adjustments */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Defines the styling for the navigation container element */
.navDiv {
  position: fixed; /* Fixes the navigation at the top of the screen */
  width: 50vw; /* Width of the navigation container */
  height: 8vh; /* Height of the navigation container */
  padding: 10px 20px; /* Padding around the navigation container */
  top: 20px; /* Distance from the top of the screen */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Center the container horizontally */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px; /* Rounded corners */
  background-color: var(--background-color); /* Background color */
  transition: all 1s ease-in-out; /* Smooth transition for all properties */
  z-index: 9999; /* Ensure the navigation is on top */
}

/* Defines the styling for the navigation element (menu bar) */
.navMenu {
  display: flex;
  width: 100%;
  justify-content: space-between; /* Distribute links evenly */
  align-items: center;
  position: relative; /* Allows positioning of the 'dot' element */
}

/* Styling for the navigation links */
.navMenu a {
  color: var(--text-color); /* Default link color */
  text-decoration: none; /* Remove default underline */
  font-size: 1.2em; /* Font size of the links */
  text-transform: uppercase; /* Convert text to uppercase */
  font-weight: 500; /* Font weight of the links */
  padding: 0 15px; /* Horizontal padding around the links */
  transition: color 0.3s ease-in-out; /* Smooth transition for color changes */
}

/* Styling for the active link (currently selected link) */
.navMenu a.router-link-active {
  color: var(--secondary-color); /* Highlight color for the active link */
}

/* Styling for the 'dot' element displayed under navigation items */
.navMenu .dot {
  position: absolute;
  bottom: -1rem; /* Position below the navigation menu */
  width: 6px; /* Diameter of the dot */
  height: 6px; /* Diameter of the dot */
  background: var(--secondary-color); /* Dot color, same as the active link */
  border-radius: 50%; /* Make the dot circular */
  opacity: 0; /* Dot is initially invisible */
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out; /* Smooth transitions for dot movement and visibility */
}

/* Styling for when the navigation is expanded */
.expanded {
  width: 100vw; /* Full viewport width when expanded */
  border-radius: 0; /* Remove rounded corners when expanded */
  top: 0; /* Align with the top of the screen */
}

/* Styling for when the navigation is fixed */
.fixed {
  position: fixed;
  top: 0; /* Fix the navigation at the top */
  left: 50%; /* Center horizontally */
  right: 0;
  z-index: 1000; /* Ensure the fixed navigation is on top */
}
</style>
