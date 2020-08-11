<template>
    <ClientLayout>
      <DetailInfo></DetailInfo>
    </ClientLayout>
</template>

<script>
    import ClientLayout from "../layout/ClientLayout";
    import DetailInfo from "../components/DetailComponent/DetailInfo";
    export default {
        name: "ViewDetail",
      components: {DetailInfo, ClientLayout}
    }
</script>

<style scoped>

</style>
