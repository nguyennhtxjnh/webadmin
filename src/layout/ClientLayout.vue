<template>
  <v-flex>
<!--    header-->
      <v-container>
          <v-toolbar fixed color="#424242">
            <v-layout row wrap>
                <v-avatar @click="$router.push('/')">
                  <img src="../assets/pika.png"/>
                </v-avatar>
                <h1 class="white--text mt-2 ml-3" >Adorable shop </h1>

              <v-spacer></v-spacer>
            <template v-for="l in links">
              <v-btn flat class="white--text" :to="l.url" > {{l.name}}</v-btn>
            </template>
            </v-layout>
          </v-toolbar>
      </v-container>
    <v-content>
    <v-flex>
      <slot></slot>
    </v-flex>
    </v-content>
<!--    footer-->
    <div class="footer" >
      <v-container>
        <v-divider class="pa-3"></v-divider>
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
      <h5 align="center" style="color: dimgrey">Copyright 2020 Adorable.vn</h5>
    </div>
  </v-flex>
</template>

<script>
    export default {
        name: "ClientLayout" ,
      data: () => ({
        links: [
          {'name':'men',
          'url':'/men'},
          {'name':'women',
            'url':'/women'},
          {'name':'sale',
            'url':'/sale'},
          {'name':'Blog',
            'url':'/blog'},
          {'name':'contact us',
            'url':'/cu'},
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
    color: #000000;
    align-content: center;
  }
</style>
