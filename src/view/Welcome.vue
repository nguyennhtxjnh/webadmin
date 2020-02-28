<template>
<ClientLayout>
<!--  <div>-->
<!--    <h1>Xin Chào Bách Khoa xấu xí</h1>-->
<!--    <pre>-->
<!--      <Component_1></Component_1>-->
<!--      <img src="../assets/pika.png"/>-->
<!--    </pre>-->
<!--  </div>-->
  <HomeComponent></HomeComponent>
</ClientLayout>

</template>

<script>
    import Component_1 from "@/components/Component_1";
    import ClientLayout from "@/layout/ClientLayout";
    import HomeComponent from "@/components/HomeComponents/HomeComponent";
    export default {
        name: "Welcome",
      components: {HomeComponent, ClientLayout, Component_1},
    }
</script>

<style scoped>

</style>
