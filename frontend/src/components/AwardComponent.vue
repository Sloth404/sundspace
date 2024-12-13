<!-- src/components/Awards.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="(award, index) in awards" :key="index">
        <v-card outlined>
          <v-card-title>{{ award.title }}</v-card-title>
          <v-card-subtitle>{{ award.subtitle }}</v-card-subtitle>
          <v-card-text>{{ award.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Awards",
  data() {
    return {
      awards: [
        {
          title: "Technical",
          subtitle: "Bester technischer Bericht",
          description: "Detail on technical excellence..."
        },
        {
          title: "Flight",
          subtitle: "Abstand zur Zielhöhe",
          description: "Distance from target altitude and recovery condition..."
        },
        // Add other awards here
      ]
    };
  }
};
</script>
