<template>
    <v-flex>
      <v-container>
        {{pagination}}
        <v-data-table
          :items="listShoes"
          :pagination.sync="pagination"
          :no-data-text="'Không có dữ liệu'"
          :no-results-text="'Không tìm thấy dữ liệu tương ứng'"
          :must-sort="true"
          hide-actions
          hide-headers
        >
           <v-layout row wrap>
             <template #items="{shoes}">
             <v-flex md 3>
               <v-card height="300px" width="200px" class="mt-2">
               <v-img :src="shoes.image"/>
               </v-card>
             </v-flex>
             </template>
           </v-layout>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)"></v-pagination>
        </div>
      </v-container>
    </v-flex>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: "Detail",
        data: function () {
          return {
            circle: false,
            disabled: false,
            nextIcon: 'navigate_next',
            nextIcons: ['mdi-chevron-right', 'mdi-arrow-right', 'mdi-menu-right'],
            prevIcon: 'navigate_before',
            prevIcons: ['mdi-chevron-left', 'mdi-arrow-left', 'mdi-menu-left'],
          pagination: {},
            listShoes:[],
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
          Axios.get(`https://5f15682d4693a60016275775.mockapi.io/API/product`,)
            // {headers: {"Access-Control-Allow-Origin": "*"}})
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
