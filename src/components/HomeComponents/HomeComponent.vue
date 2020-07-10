<template>
<!--    <v-img  height="100%"-->
<!--            :src="require('@/assets/hinh.jpg')">-->
  <v-img height="100%"
         src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
  >
      <v-container style="height: 100%">
        <v-layout style="height: 100%" row wrap >
          <v-spacer></v-spacer>
          <v-flex class="md3" style="align-self: center" >
            <form name="form1">
              <v-btn  color="warning" align="center" name="test" ref="aa">
                Please click me
              </v-btn>
            </form>

          </v-flex>
          <v-spacer></v-spacer>
        </v-layout>
      </v-container>

    </v-img>
</template>

<script>
    export default {
        name: "HomeComponent"
    }
</script>

<style scoped>

</style>
