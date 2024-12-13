<template>
  <section class="benefits">
    <h2 class="section-title">Wie Sie von uns profitieren</h2>
    <div class="benefits-table">
      <div class="benefit-header">
        <div>Level</div>
        <div v-for="(benefit, index) in benefits" :key="index">
          {{ benefit }}
        </div>
      </div>
      <div
        v-for="(packageItem, index) in packages"
        :key="index"
        class="benefit-row"
      >
        <div>{{ packageItem.name }}</div>
        <div v-for="(benefit, index) in benefits" :key="index">
          <span v-if="packageItem.benefits.includes(benefit)">✔</span>
          <span v-else>✖</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Benefits',
  props: {
    benefits: Array,
    packages: Array,
  },
};
</script>

<style scoped>
.benefits {
  padding: 40px 20px;
  background-color: var(--background-color);
  color: var(--text-color);
}

.section-title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
}

.benefits-table {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.benefit-header,
.benefit-row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  max-width: 800px;
  text-align: center;
  padding: 10px;
}

.benefit-header {
  background-color: var(--background-color);
  font-weight: bold;
}

.benefit-row:nth-child(even) {
  background-color: var(--background-color);
}
</style>
