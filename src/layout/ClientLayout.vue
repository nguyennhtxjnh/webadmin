<template>
  <v-flex>
      <v-container>
          <v-toolbar fixed>
            <v-layout row wrap>
              <v-avatar>
                <img src="../assets/pika.png"/>
              </v-avatar>

              <h1 class="blue-grey--text mt-2 ml-3">Adorable shop </h1>
              <v-spacer></v-spacer>
            <template v-for="l in links">
              <v-btn flat=""> {{l.name}}</v-btn>
            </template>
            </v-layout>
          </v-toolbar>
      </v-container>
    <v-content>
    <v-flex class="mt-3" >
      <slot></slot>
    </v-flex>
  </v-content>
    <div class="footer">
      <v-container>
        <v-layout row wrap>
          <v-flex class="md4 itemfooter">
            <h3 align="center">
              STAY CONNECTED
            </h3>
          </v-flex>
          <v-flex class="md4 itemfooter">
            <h3 align="center">BE OUR FRIEND</h3>
          </v-flex>
          <v-flex class="md4 itemfooter">
            <h3 align="center">NEED ASSISTANCE?</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-flex>
</template>

<script>
    export default {
        name: "ClientLayout" ,
      data: () => ({
        links: [
          {'name':'home',
          'url':'/home'},
          {'name':'shop',
            'url':'/shop'},
          {'name':'sale',
            'url':'/sale'},
          {'name':'Blog',
            'url':'/blog'},
          {'name':'Contact Us',
            'url':'/contact'},
          {'name': 'cart',
          'url': '/cart'}
        ],
      }),
    }
</script>

<style scoped>
  .footer {
    margin-bottom: 20px;

  }
  .itemfooter {
    color: coral;
    align-content: center;
  }
</style>
