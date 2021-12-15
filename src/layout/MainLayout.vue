<template>
  <the-nav-bar />
  <div class="container with-nav">
    <app-message />
    <router-view/>
  </div>
</template>

<script>
import TheNavBar from "../components/TheNavBar";
import AppMessage from "../components/ui/AppMessage";

export default {
  name: "MainLayout",
  components: {
    TheNavBar,
    AppMessage
  }
}
</script>

<style scoped>

</style>
