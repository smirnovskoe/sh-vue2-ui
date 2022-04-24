<template>
  <v-navigation-drawer app v-model="drawer">
    <v-list>
      <div v-for="section in menu_items" :key="section.name">
        <v-subheader>{{ section.name }}</v-subheader>
        <v-list-item
          v-for="item in section.subsections"
          :key="item.title"
          :to="item.url"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AppSidebar",

  data: () => ({
    drawer: true,
    menu_items: [
      {
        name: "Main",
        subsections: [
          { title: "Home", url: "/", icon: "mdi-view-dashboard" },
          { title: "About", url: "/about", icon: "mdi-information" },
        ],
      },
    ],
  }),
};
</script>