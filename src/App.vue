<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "App",
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout() {
      console.log(this.$route.meta);
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },

  data: () => ({
    //
  }),
};
</script>
