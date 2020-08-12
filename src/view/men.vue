<template>
    <client-layout>
      <h1>Men</h1>
      <detail></detail>
    </client-layout>
</template>

<script>
    import ClientLayout from "../layout/ClientLayout";
    import Detail from "../components/DetailComponent/Detail";
    export default {
        name: "men",
      components: {Detail, ClientLayout}
    }
</script>

<style scoped>

</style>
