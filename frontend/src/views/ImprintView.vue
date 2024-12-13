<template>
    <div class="content">
        <!-- Address section -->
        <h2>Adresse</h2>
        <p>Zur Schwedenschanze 15</p>
        <p>18435 Stralsund</p>
        <!-- Email link, note: corrected the href format to use the proper syntax -->
        <p class="link"><a :href="'mailto:sundspace@hochschule-stralsund.de'">sundspace@hochschule-stralsund.de</a></p>
        
        <!-- Chairpersons section -->
        <h2>Vorsitzende</h2>
        <p>1. Martin Kluge</p>
        <p>2. Yaron Klotz</p>

        <!-- Treasurer section -->
        <h2>Schatzmeister*in</h2>
        <p>Kyra Berry</p>

        <!-- Association information -->
        <h2>SUNDSPACE e.V.</h2>
        <p>Registergericht: Amtsgericht Stralsund</p>
        <p>Vereinsregisternummer: 10438</p>
        
        <!-- Legal information -->
        <br>
        <p>V.i.S.d § 18 Abs. 2 MStV:</p>
        <p>Martin Kluge</p>
        <p>Obere Hauptstraße 9</p>
        <p>09232 Hartmannsdorf</p>
    </div>
</template>

<style scoped lang="css">
/* Container styling for the imprint content */
.content {
    position: relative; /* Position the container relative to its normal position */
    max-width: 500px; /* Restrict the maximum width to 500px */
    margin: 0 auto; /* Center the container horizontally */
    padding: 1rem; /* Add padding inside the container */
    background-color: #272727; /* Dark background color */
    border-radius: 8px; /* Rounded corners */
    text-align: center; /* Center align text */
    margin-top: 20vh; /* Space from the top of the viewport */
    padding-bottom: 2.5rem; /* Additional padding at the bottom */
}

/* Styling for all h2 elements */
h2 {
    text-align: center; /* Center align headings */
    margin-top: 1.5rem; /* Space above each heading */
    font-weight: bold; /* Bold text */
    font-size: 1.5rem; /* Font size for headings */
    color: var(--secondary-color); /* Yellow color for headings */
}

p {
    color: var(--text-color); /* Whitish color for the text */
}

/* Styling for links */
.link {
    color: var(--tertiary-color); /* Blue color for links */
}
</style>
