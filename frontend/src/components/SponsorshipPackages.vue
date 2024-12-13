<template>
  <!-- Section for displaying sponsorship packages -->
  <section class="packages">
    <!-- Title for the section -->
    <h2 class="section-title">Unsere Sponsoring-Pakete</h2>
    <div class="package-list">
      <!-- Loop through each package item and render a card for each -->
      <div
        v-for="(packageItem, index) in packages"
        :key="index"
        class="package-card"
      >
        <!-- Title of the package -->
        <h3 class="package-title">{{ packageItem.name }}</h3>
        <!-- Price of the package -->
        <p class="package-price">{{ packageItem.price }}</p>
        <!-- List of benefits included in the package -->
        <ul class="package-benefits">
          <li v-for="(benefit, idx) in packageItem.benefits" :key="idx">
            {{ benefit }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SponsorshipPackages', // Name of the component
  props: {
    // Array of packages to be passed as a prop
    packages: Array,
  },
};
</script>

<style scoped>
/* Styling for the packages section */
.packages {
  padding: 40px 20px; /* Padding around the section */
  color: var(--text-color); /* Text color */
  background-color: black; /* Background color of the section */
}

/* Styling for the section title */
.section-title {
  text-align: center; /* Center the title text */
  font-size: 2em; /* Font size for the title */
  margin-bottom: 20px; /* Space below the title */
  color: var(--secondary-color); /* Color of the title text */
}

/* Container for the list of package cards */
.package-list {
  display: flex; /* Flexbox layout for horizontal alignment */
  flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
  justify-content: center; /* Center items horizontally */
}

/* Styling for each package card */
.package-card {
  background-color: var(--background-color); /* Background color of the card */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Shadow effect */
  margin: 10px; /* Space around the card */
  padding: 20px; /* Padding inside the card */
  width: 300px; /* Fixed width for the card */
  transition: transform 0.3s ease; /* Smooth scaling effect on hover */
}

/* Hover effect for package cards */
.package-card:hover {
  transform: scale(1.05); /* Scale up the card slightly */
}

/* Styling for the package title */
.package-title {
  font-size: 1.5em; /* Font size for the title */
  margin-bottom: 10px; /* Space below the title */
}

/* Styling for the package price */
.package-price {
  color: var(--tertiary-color); /* Color for the price text */
  font-weight: bold; /* Bold text for the price */
  margin-bottom: 15px; /* Space below the price */
}

/* Styling for the benefits list */
.package-benefits {
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove default padding */
}

/* Styling for each benefit item */
.package-benefits li {
  padding: 5px 0; /* Space above and below each item */
  border-bottom: 1px solid var(--secondary-color); /* Bottom border for each item */
}

/* Remove border for the last benefit item */
.package-benefits li:last-child {
  border-bottom: none; /* No bottom border for the last item */
}
</style>
