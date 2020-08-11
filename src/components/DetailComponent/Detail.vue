<template>
    <v-flex>
      <v-container>
<!--        {{pagination}}-->
<!--        <v-data-table-->
<!--          :items="listShoes"-->
<!--          :pagination.sync="pagination"-->
<!--          :no-data-text="'Không có dữ liệu'"-->
<!--          :no-results-text="'Không tìm thấy dữ liệu tương ứng'"-->
<!--          :must-sort="true"-->
<!--          hide-actions-->
<!--          hide-headers-->
<!--        >-->
           <v-layout row wrap>
             <template v-for="shoes in listShoes">
             <v-flex v-if="shoes.status = 'Còn hàng'" class="md4 pa-3">
               <v-card height="auto" width="100%" class="mt-3 pa-2 pb-3">
               <v-img :src="shoes.image"/>
                 <h5 class="text-truncate mt-1">{{shoes.name}}</h5>
                 <span  v-if="shoes.newPrice == null" class="red--text" > {{shoes.oldPrice}}</span>
                 <span v-else style="text-decoration: line-through" > {{shoes.oldPrice}}</span>
                 <span v-if="shoes.newPrice != null" class="red--text">{{shoes.newPrice}}</span>
               </v-card>
             </v-flex>
             </template>
           </v-layout>
<!--        </v-data-table>-->
<!--        <div class="text-xs-center pt-2">-->
<!--           <v-pagination v-model="page"-->
<!--                          :page="page"-->
<!--                          @input="reloadPage"-->
<!--                          :length="pagination.totalItems"></v-pagination>-->
<!--        </div>-->
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
          Axios.get(`http://192.168.120.48:8702/api/products`,
            {headers: {"Access-Control-Allow-Origin": "*"}})
            .then(response => {
              this.listShoes = response.data;
              this.pagination.totalItems = response.data.size();
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
