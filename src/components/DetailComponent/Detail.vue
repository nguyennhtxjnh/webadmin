<template>
    <v-flex>
      <v-container>
        hi detail
        <v-card>

           <v-layout row wrap>
             <template v-for="shoes in listShoes">
             <v-flex md 3>
                <v-img :src="shoes.image"/>
             </v-flex>
             </template>
           </v-layout>

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
          Axios.get(`http://localhost:8702/api/products`,
            {headers: {"Access-Control-Allow-Origin": "*"}})
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
