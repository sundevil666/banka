<template>
  <the-nav-bar />
  <the-sidebar />
  <div class="container with-nav">
    <app-message />
    <router-view/>
  </div>
</template>

<script>
import TheNavBar from "../components/TheNavBar";
import AppMessage from "../components/ui/AppMessage";
import TheSidebar from "../components/ui/TheSidebar";

export default {
  name: "MainLayout",
  components: {
    TheNavBar,
    AppMessage,
    TheSidebar
  }
}
</script>

<style scoped>

</style>
