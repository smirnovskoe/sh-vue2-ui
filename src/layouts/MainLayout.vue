<template>
  <v-main class="grey lighten-2">
    <app-navbar />
    <app-sidebar />
    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>

<script>
import AppNavbar from "../components/app/AppNavbar.vue";

import AppSidebar from "../components/app/AppSidebar.vue";
export default {
  name: "MainLayout",
  components: {
    AppNavbar,
    AppSidebar,
  },
  data: () => ({
    isSidebarOpen: false,
  }),
};
</script>