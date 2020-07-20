<template>
    <v-flex>
      <v-container>
        hi detail
        {{listShoes}}
        <v-card
          max-width="400"
          class="mx-auto"
        >
          <v-container class="pa-1">
            <v-item-group
              v-model="selected"
              multiple
            >
              <v-row>
                <v-col
                  v-for="(item, i) in listShoes"
                  :key="i"
                  cols="12"
                  md="6"
                >
                  <v-item v-slot:default="{ active, toggle }">
                    <v-img
                      :src="item.image"
                      height="150"
                      class="text-right pa-2"
                      @click="toggle"
                    >

                    </v-img>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
          </v-container>
        </v-card>
      </v-container>
    </v-flex>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: "Detail",
        data: function () {
          return {
          pagination: {},
          listShoes: [],
          detail:{
            id: '',
            code:'',
            name:'',
            status:'',
            image:'',
            linkDetail:'',
            oldPrice:'',
            newPrice:'',
            imagesDetail:'',
            sizes:'',
          }
        }
      },
      methods: {

        getListShoes(){
          this.loading = true;
          Axios.get(`https://5f0c73b29d1e150016b38214.mockapi.io/api/products`)
            .then(response => {
              this.listShoes = response.data;

            })
            .catch(console.error)
            .finally(() => {
              this.loading = false;
            })
        },

      },
      mounted() {
        this.$nextTick(() => {
          this.getListShoes();
        })
      },
      computed: {

      },
      watch: {
        pagination() {
          this.getListShoes();
        }
      },
    }
</script>

<style scoped>

</style>
