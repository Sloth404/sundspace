<template>
  <!-- Conditional rendering of the confirmation dialog based on `showConfirmation` state -->
  <div v-if="showConfirmation" class="overlay">
    <div class="dialog">
      <!-- Message prompting the user to confirm or cancel an action -->
      <p>
        Wollen Sie auf die Seite des Euroc weitergeleitet werden? Sie verlassen
        diese Webseite.
      </p>
      <div class="button-container">
        <!-- Button to confirm the action, triggering the `handleConfirm` method -->
        <button id="confirm" @click="handleConfirm">Seite verlassen</button>
        <!-- Button to cancel the action, triggering the `handleCancel` method -->
        <button id="deny" @click="handleCancel">Bleib auf der Seite</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'; // Importing Vue's reactivity system for computed properties
import { useStore } from 'vuex'; // Importing Vuex for state management

const store = useStore(); // Access the Vuex store instance

// Computed property that determines whether the confirmation dialog should be shown
const showConfirmation = computed(() => store.getters.showConfirmation);

// Method to handle the confirmation action
const handleConfirm = () => {
  const confirmCallback = store.state.confirmCallback; // Retrieve the confirm callback from the store state
  store.dispatch('hideConfirmation'); // Dispatch action to hide the confirmation dialog
  if (confirmCallback) confirmCallback(); // Execute the confirm callback if it exists
};

// Method to handle the cancellation action
const handleCancel = () => {
  const cancelCallback = store.state.cancelCallback; // Retrieve the cancel callback from the store state
  store.dispatch('hideConfirmation'); // Dispatch action to hide the confirmation dialog
  if (cancelCallback) cancelCallback(); // Execute the cancel callback if it exists
};
</script>

<style scoped>
/* Styles for the overlay that covers the screen when the confirmation dialog is visible */
.overlay {
  position: fixed; /* Fixed positioning to cover the entire viewport */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background to dim the content behind */
  display: flex; /* Flexbox to center the dialog */
  justify-content: center; /* Center the dialog horizontally */
  align-items: center; /* Center the dialog vertically */
  z-index: 1000; /* High z-index to ensure it's above all other content */
}

/* Styles for the dialog box */
.dialog {
  background: #272727; /* Dark background color for the dialog */
  padding: 20px; /* Padding inside the dialog */
  border-radius: 5px; /* Rounded corners */
  text-align: center; /* Center the text */
  max-width: 400px; /* Maximum width of the dialog */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for a raised effect */
}

/* Styles for the dialog message */
.dialog p {
  padding-bottom: 20px; /* Space below the message */
  color: #dadada; /* Light text color */
}

/* Styles for the buttons inside the dialog */
.dialog button {
  margin: 0 10px; /* Space between buttons */
  padding: 10px 15px; /* Padding inside buttons */
  border: none; /* Remove default button border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease; /* Smooth transition on hover */
  color: black; /* Text color for buttons */
}

/* Specific styles for the deny button */
#deny {
  background-color: blueviolet; /* Background color for deny button */
}

/* Specific styles for the confirm button */
#confirm {
  background-color: #fddb3a; /* Background color for confirm button */
}

/* Hover effect for buttons */
.dialog button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

/* Container for buttons to adjust layout */
.button-container {
  display: flex; /* Flexbox for layout */
  justify-content: center; /* Center buttons horizontally */
  gap: 10px; /* Space between buttons */
}
</style>
