<template>
  <main>
    <div class="splash-screen">
      <Hyperdrive-component></Hyperdrive-component>
      <img :src="banner" alt="Competition View" />
    </div>
    <div class="euroc-text">
      <p>
        Die European Rocketry Challenge (EUROC) ist ein europäischer Konstruktionswettbewerb der studentischen Raumfahrtforschung, der seit 2020 jährlich von der Portuguese Space Agency – Portugal Space ausgerichtet wird. EUROC ist der erste universitäre Raketenstartwettbewerb Europas.
      </p>
      <p>
        Studierende entwerfen, bauen und starten hierfür ihre eigenen Raketen und treten alljährlich gegen Teams aus ganz Europa an.
      </p>
      <p>
        Die Wettbewerbe sind in mehrere Kategorien unterteilt.
      </p>
      <p>
        So werden die teilnehmenden Raketen nach ihrer Antriebsart und Steighöhe differenziert. Jedes Team hat die Wahl zwischen Feststoff-, Flüssig-, und Hybrid-Triebwerken, die jeweils von einem gelisteten Hersteller erworben (commercial off-the-shelf, COTS) oder vom Team selbst entwickelt werden können (student researched and developed, SRAD). Die möglichen Zielhöhen sind in 3000 und 9000 Meter unterteilt und müssen zusammen mit der Wahl des Triebwerkes vor der Teilnahme bekannt gegeben werden.
      </p>
      <p>
        Ziel des Wettbewerbes ist es unter anderem, die gewählte Steighöhe so exakt wie möglich zu erreichen.
      </p>
      <p>
        Beim EUROC zählen nicht nur die technischen Leistungen der angehenden Ingenieure und Ingenieurinnen, sondern auch betriebswirtschaftliches Know-How und ein guter Teamgeist, um maximale Erfolge zu erzielen.
      </p>
      <p>
        Weitere Informationen über die European Rocketry Challenge findet ihr hier:
        <a href="https://euroc.pt/" target="_blank">https://euroc.pt/</a>
      </p>
    </div>
    <div class="breaker"></div>
    <CardComponent /> <!-- Hier wird die neue Komponente eingefügt -->

  </main>
</template>

<script lang="ts">
import banner from "../../../src/assets/pics/competition_color.png";
import HyperdriveComponent from "../components/HyperdriveComponent.vue";
import CardComponent from "../components/CardComponent.vue";

export default {
  components: { HyperdriveComponent, CardComponent },
  data() {
    return {
      banner, // Banner-Image-Source
    };
  },
};
</script>

<style>
.breaker {
  height: 10vh;
}

.splash-screen {
  grid-column: span 3; /* Span across all three columns */
  height: 100vh; /* Full viewport height */
  display: flex; /* Flexbox layout for centering content */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  background: transparent; /* Transparent background */
}

.splash-screen img {
  z-index: 5;
}

HyperdriveComponent {
  z-index: -1;
}

CardComponent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 20vh;
}

.euroc-text {
  position: relative;
  width: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 80px;
  text-align: left;
  font-size: 1em;
  line-height: 1.6;
}

.euroc-text a {
  color: var(--tertiary-color); /* Links hervorheben */
  text-decoration: none;
}

.euroc-text a:hover {
  text-decoration: underline;
}
</style>
