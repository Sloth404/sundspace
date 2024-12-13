<template>
  <header class="header">
    <!-- Main title for the sponsor section -->
    <h1 class="title">Sponsor:in werden</h1>
    <!-- Blockquote element for displaying a quote -->
    <blockquote class="quote">
      "Mut steht am Anfang des Handelns, Glück am Ende." - Demokrit
    </blockquote>
    <!-- Paragraph with description about the sponsorship opportunity -->
    <p class="description">
      Mit der Gründung von SUNDSPACE möchten wir vielen jungen Menschen die
      Möglichkeit zu einem ersten Schritt in die Raumfahrt ermöglichen. Mutig,
      wo es doch in Stralsund keinen Studiengang der Luft- und Raumfahrttechnik
      gibt. Und doch, oder gerade deshalb, arbeitet das gesamte Team ehrgeizig
      Hand in Hand an der Verwirklichung unseres gemeinsamen Traums, dem
      erfolgreichen Start unserer Rakete. Durch ihr Engagement als Sponsoren und
      Partner können sie diesen Traum in die Realität umsetzen und dem Team am
      Ziel seiner Reise großes Glück bescheren.
    </p>
  </header>
</template>

<script>
export default {
  name: 'SponsorHeadComponent',  // Component name
};
</script>

<style scoped>
/* Styling for the header element */
.header {
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  display: flex; /* Flexbox layout for centering content */
  align-items: center; /* Vertically center items */
  flex-direction: column; /* Stack items vertically */
  justify-content: center; /* Horizontally center items */
}

/* Styling for the main title */
.title {
  font-weight: bold; /* Bold font weight */
  font-size: 5em; /* Large font size */
  margin-bottom: 10px; /* Space below the title */
  color: var(--secondary-color); /* Yellow color for the title */
}

/* Styling for the quote block */
.quote {
  font-style: italic; /* Italic text */
  margin-bottom: 20px; /* Space below the quote */
  color: var(--text-color); /* Light gray color for the quote */
}

/* Styling for the description paragraph */
.description {
  font-size: 1.1em; /* Slightly larger font size */
  line-height: 1.6; /* Increased line height for readability */
  padding-left: 15rem; /* Padding on the left side */
  padding-right: 15rem; /* Padding on the right side */
  color: var(--text-color)
}
</style>
