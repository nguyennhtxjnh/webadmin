<template>
    <ClientLayout>
      <detail></detail>
    </ClientLayout>
</template>

<script>
    import ClientLayout from "../../layout/ClientLayout";
    import Detail from "./Detail";
    export default {
        name: "DetailView",
      components: {Detail, ClientLayout}
    }
</script>

<style scoped>

</style>
