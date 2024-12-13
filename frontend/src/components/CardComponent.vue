<template>
  <div class="carousel">
    <div class="carousel-container">
      <button @click="prevSlide" class="carousel-nav carousel-nav-left">‹</button>

      <div class="carousel-content">
        <div v-for="(card) in visibleCards"
             :key="card.id"
             class="carousel-card">
          <img :src="card.image" :alt="card.title" class="card-image" />
          <h3 class="card-title">{{ card.title }}</h3>
          <ul class="card-criteria">
            <li v-for="criterion in card.criteria" :key="criterion">{{ criterion }}</li>
          </ul>
        </div>
      </div>

      <button @click="nextSlide" class="carousel-nav carousel-nav-right">›</button>
    </div>

    <div class="carousel-indicators">
      <span
        v-for="(card, index) in cards"
        :key="card.id"
        :class="{ active: index === currentIndex }"
        @click="setSlide(index)">
      </span>
    </div>
  </div>
</template>

<script>
import awardD from "src/assets/pics/awards/D.png";
import awardE from "src/assets/pics/awards/E.png";
import awardF from "src/assets/pics/awards/F.png";
import awardT from "src/assets/pics/awards/T.png";
import awardT1 from "src/assets/pics/awards/T1.png";

export default {
  name: 'ContentCarousel',
  data() {
    return {
      currentIndex: 0,
      cardsPerView: 3, // Anzahl der Karten, die gleichzeitig angezeigt werden
      cards: [
        {
          id: 1,
          title: "Flight Award",
          image: awardF,
          criteria: ["Abstands zur Zielhöhe in Metern", "Zustand der Rakete nach der Bergung", "Konzept, Simulation, Systemintegration, Steuerung und praktische Umsetzung"]
        },
        {
          id: 2,
          title: "Euroc Award",
          image: awardE,
          criteria: ["für das Team, das in allen Aspekten des Wettbewerbs hervorragende Leistungen erbracht hat"]
        },
        {
          id: 3,
          title: "Design Award",
          image: awardD,
          criteria: ["insgesamt beste Designumsetzung", "hohe Qualität in allen ihren Merkmalen", "konsequente strategische Entscheidungen, Innovation"]
        },
        { id: 4,
          title: "Team Award",
          image: awardT1,
          criteria: ["großer Sinn für Teamgeist und Sportlichkeit"]
        },
        {
          id: 5,
          title: "Technical Award",
          image: awardT,
          criteria: ["Bester technischer Bericht"]
        },
      ],
    }
  },
  computed: {
    visibleCards() {
      const visibleCards = [];
      for (let i = 0; i < this.cardsPerView; i++) {
        const index = (this.currentIndex + i) % this.cards.length;
        visibleCards.push(this.cards[index]);
      }
      return visibleCards;
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    },
    setSlide(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.carousel-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.carousel-content {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.carousel-card {
  flex: 1;
  margin: 0 10px;
  text-align: center;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--glossy-effect);
  color: var(--text-color);
  transition: transform 0.3s ease;
  height: 400px;
}

.card-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.card-title {
  font-size: 1.3em;
  margin: 10px 0;
}

.card-criteria {
  list-style-type: none;
  padding: 0;
}

.card-criteria li {
  font-size: 1em;
  padding-bottom: 10px;
}

.carousel-nav {
  background: transparent;
  border: none;
  font-size: 2em;
  color: var(--background-color);
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-nav-left {
  left: 10px;
}

.carousel-nav-right {
  right: 10px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.carousel-indicators span {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background: var(--text-color);
  border-radius: 50%;
  cursor: pointer;
}

.carousel-indicators span.active {
  background: var(--background-color);
}
</style>
