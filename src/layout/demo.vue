<template>
    <v-flex class="md12" style="background-color: coral">
      <v-app>
        <v-btn color="success">Success</v-btn>
        <v-btn color="error">Error</v-btn>
        <v-btn color="warning">Warning</v-btn>
        <v-btn color="info">Info</v-btn>
      </v-app>
      <v-toolbar
        fixed
        style="background-color: #42b983"
        class="xs12 md12"
      >
        <v-layout row wrap >
          <template
            v-for="link in links" class="my-2">
            <v-btn large flat="" color="error">
              {{ link }}
            </v-btn>
          </template>

        </v-layout>


        <v-toolbar-title>PIKACHU SHOES</v-toolbar-title>

        <v-spacer></v-spacer>

      </v-toolbar>
      <v-content>
        <v-flex class="mt-3"  >
          <slot style="background-color: red"></slot>
        </v-flex>
      </v-content>
      <v-footer
        dark
        padless
        style="background-color: coral"
      >
        <v-card
          flat
          tile
          class="indigo lighten-1 white--text text-center"
        >

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-flex>
</template>

<script>
    export default {
        name: "demo",
      data: () => ({
        links: [
          'Home',
          'About Us',
          'Team',
          'Services',
          'Blog',
          'Contact Us',
        ],
      }),
    }
</script>

<style scoped>

</style>
