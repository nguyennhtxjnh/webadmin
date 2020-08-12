<template>
<v-container>
  <v-layout row wrap class="justify-center">
    <v-flex class="md1 mr-3">
      <template v-for="i in ListImagesDetail">
        <img :src="i" width="100%">
      </template>
    </v-flex>
    <v-flex class="md6 mr-3">
      <img :src="shoes.image" width="100%">
    </v-flex>
    <v-flex class="md3">

    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
    export default {
        name: "DetailInfo",
        data: function () {
          return{
            shoes : {
              "id": 1,
              "code": "CT5534-001",
              "name": "Air Force 1 Low - BHM (Men's Unisex)",
              "status": "Còn Hàng",
              "image": "https://bulldog.vn/uploads/sanpham/224-5aeb6621-5677-4f63-bce3-83b8c3cc152b-1024x1024-jpeg-20200402005134nwgl8JJWyw_thum.jpeg",
              "linkDetail": "https://bulldog.vn/giay-nam/sneaker/air-force-1-low-bhm-men-s-unisex.htm",
              "oldPrice": "5.500.000 VNĐ",
              "newPrice": "8.900.000 VNĐ",
              "imagesDetail": "https://bulldog.vn/uploads/tt_hinh/224-5aeb6621-5677-4f63-bce3-83b8c3cc152b-1024x1024-20200402005036oLlCiDrmGU_thum.jpg,https://bulldog.vn/uploads/tt_hinh/227-8d27db78-bf75-4f89-a963-a3ca2a7dfbd2-1024x1024-20200402005036l9z6J9pKxN_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-9-20200304020534m0g0CWcMxz_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-8-20200304020533DgcwMlRjwK_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-5-20200304020533oAA1W4bSgu_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-6-20200304020531Q3vkXxqMnp_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-1-20200304020531bUOpTdVArr_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-2-20200304020521Tx7pkOm4yo_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-10-20200304020514w1eTfunEsb_thum.jpg",
              "sizes": "Size 4 ( US ),Size 4.5 ( US ),Size 5 ( US ),Size 5.5 ( US ),Size 6 ( US ),Size 7 ( US ),Size 7.5 ( US ),Size 8 ( US ),Size 8.5 ( US ),Size 9.5 ( US ),Size 9 ( US ),Size 10 ( US ),Size 10.5 ( US )"
            },
            ListImagesDetail : [
              "https://bulldog.vn/uploads/tt_hinh/224-5aeb6621-5677-4f63-bce3-83b8c3cc152b-1024x1024-20200402005036oLlCiDrmGU_thum.jpg",
              "https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-10-20200304020514w1eTfunEsb_thum.jpg",
              "https://bulldog.vn/uploads/tt_hinh/227-8d27db78-bf75-4f89-a963-a3ca2a7dfbd2-1024x1024-20200402005036l9z6J9pKxN_thum.jpg",
              "https://bulldog.vn/uploads/tt_hinh/227-8d27db78-bf75-4f89-a963-a3ca2a7dfbd2-1024x1024-20200402005036l9z6J9pKxN_thum.jpg"
            ]

          };
          getImadetail()
          {
            var imageDetail = "https://bulldog.vn/uploads/tt_hinh/224-5aeb6621-5677-4f63-bce3-83b8c3cc152b-1024x1024-20200402005036oLlCiDrmGU_thum.jpg,https://bulldog.vn/uploads/tt_hinh/227-8d27db78-bf75-4f89-a963-a3ca2a7dfbd2-1024x1024-20200402005036l9z6J9pKxN_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-9-20200304020534m0g0CWcMxz_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-8-20200304020533DgcwMlRjwK_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-5-20200304020533oAA1W4bSgu_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-6-20200304020531Q3vkXxqMnp_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-1-20200304020531bUOpTdVArr_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-2-20200304020521Tx7pkOm4yo_thum.jpg,https://bulldog.vn/uploads/tt_hinh/air-force-1-low-bhm-ct5534-001-bulldog-vn-10-20200304020514w1eTfunEsb_thum.jpg";
             this.list= imageDetail;

          }
        },
        mounted() {
          getImadetail();
        }

    }
</script>

<style scoped>

</style>
