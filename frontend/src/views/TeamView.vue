<template>
  <!-- Main container for the team view -->
  <div class="team-intro">
    <!-- Introductory section with an image and text -->
    <img class="intro_img" :src="introImage" alt="team intro sundspace" />
    <p>
      Zentrale Bedeutung des Vereins ist eine effiziente Systementwicklung, an
      der sowohl die Studierenden als auch die Professoren und Professorinnen
      der Hochschule Stralsund beteiligt sind.
      <br />
      Dazu befolgt das Team eine Koordinationsstrategie, in der die
      Aufgabenbereiche in den jeweiligen Abteilungen Elektrotechnik und
      Informatik, Maschinenbau und Management unterteilt werden.
    </p>
  </div>

  <h2>Unsere Abteilungsleiter</h2>

  <div class="team-view">

    <!-- Container for displaying team member cards and profile overlay -->
    <div class="team-container">
      <!-- Render team member cards dynamically with v-for -->
      <TeamMemberCardComponent
        v-for="member in filteredMembers"
        :key="member.id"
        :member="member"
        @click="openOverlay(member)"
      />
      <!-- Profile overlay displayed when a member is selected -->
      <ProfileOverlay
        v-if="selectedMember"
        :member="selectedMember"
        @close="closeOverlay"
      />
    </div>
  </div>
</template>

<script>
// Import necessary components and data
import TeamMemberCardComponent from '../components/TeamMemberCardComponent.vue';
import ProfileOverlay from '../components/TeamMemberOverlayComponent.vue';
import members from '../../../src/assets/json/members.json';
import introImage from '../../../src/assets/pics/team/intro_image.png';

export default {
  components: {
    TeamMemberCardComponent,
    ProfileOverlay,
  },
  data() {
    return {
      // Data properties for team members and selected member/tag
      members,
      selectedMember: null,
      selectedTag: null,
      introImage,
    };
  },
  computed: {
    // Compute unique tags and sort them alphabetically
    tags() {
      const tagsSet = new Set();
      this.members.forEach((member) => {
        tagsSet.add(member.role); // Add roles
        member.tags.forEach((tag) => tagsSet.add(tag)); // Add tags
      });
      return Array.from(tagsSet).sort((a, b) => a.localeCompare(b));
    },
    // Return filtered tags (currently not filtered further)
    filteredTags() {
      return this.tags;
    },
    // Filter members based on the selected tag
    filteredMembers() {
      if (!this.selectedTag) return this.members;
      return this.members.filter(
        (member) =>
          member.tags.includes(this.selectedTag) ||
          member.role === this.selectedTag
      );
    },
  },
  methods: {
    // Toggle the selected tag for filtering
    selectTag(tag) {
      this.selectedTag = this.selectedTag === tag ? null : tag;
    },
    // Open the profile overlay for a selected member
    openOverlay(member) {
      this.selectedMember = member;
    },
    // Close the profile overlay
    closeOverlay() {
      this.selectedMember = null;
    },
    // Sort members alphabetically and assign unique IDs
    sortAndAssignIds(members) {
      return members
        .sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical sort
        .map((member, index) => ({
          ...member,
          id: index + 1, // Assign new IDs starting from 1
        }));
    },
  },
  created() {
    // Sort and assign IDs to members when component is created
    this.members = this.sortAndAssignIds(members);
  },
};
</script>

<style scoped>
h2 {
  color: var(--text-color);
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  padding: 20px;
  padding-bottom: 60px;
  display: flex; /* Flexbox layout for centering content */
  align-items: center; /* Vertically center items */
  flex-direction: column; /* Stack items vertically */
  justify-content: center; /* Horizontally center items */
}

/* Styles for the introductory section */
.team-intro {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Styling for introductory paragraph */
.team-intro p {
  color: var(--text-color);
  padding: 20px;
  font-size: 24px; /* Fixed the missing 'px' unit */
  font-style: italic;
  max-width: 30rem;
}

/* Styling for introductory image */
.intro_img {
  width: 45rem;
  height: auto;
}

/* Styling for the team view container */
.team-view {
  padding: 20px;
}

/* Styling for the tag filter section */
.tag-filters {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

/* Container for the tag filters */
.tag-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  margin-left: 75px;
  margin-right: 75px;
}

/* Basic styling for tags */
.tag {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
}

/* Styling for the active tag */
.active-tag {
  background-color: var(--secondary-color); /* Highlighted color for active tag */
}

/* Container for team member cards */
.team-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-left: 200px;
  margin-right: 200px;
}

/* Transition effect for team member cards */
.team-member-card {
  transition: transform 0.3s;
}

/* Scale effect on hover for team member cards */
.team-member-card:hover {
  transform: scale(1.03);
}
</style>
