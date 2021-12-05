<template>
  <the-nav-bar />
  <div class="container with-nav">
    <router-view/>
  </div>
</template>

<script>
import TheNavBar from "../components/TheNavBar";

export default {
  name: "MainLayout",
  components: {
    TheNavBar
  }
}
</script>

<style scoped>

</style>
