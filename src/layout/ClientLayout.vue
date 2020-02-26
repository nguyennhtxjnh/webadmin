<template>
    <div>
      <v-toolbar
        dark
        style="background-color: #42b983"
      >  <v-row
          justify="center"
          no-gutters
        >
          <v-btn
            v-for="link in links"
            :key="link"
            color="warning"
          >
            {{ link }}
          </v-btn>
        </v-row>
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
    </div>
</template>

<script>
    export default {
        name: "ClientLayout",
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
