<template>
<ClientLayout>
  <HomeComponent></HomeComponent>
  <v-container>
    <v-layout row wrap style="justify-content: center">
      <h1 style="font-family: 'Times New Roman'">YEAR ROUND</h1>
    </v-layout>
  </v-container>
  <YearRound></YearRound>
</ClientLayout>
</template>

<script>
    import ClientLayout from "@/layout/ClientLayout";
    import HomeComponent from "@/components/HomeComponents/HomeComponent";
    import YearRound from "../components/HomeComponents/YearRound";
    export default {
        name: "Welcome",
      components: {YearRound, HomeComponent, ClientLayout},
    }
</script>

<style scoped>

</style>
