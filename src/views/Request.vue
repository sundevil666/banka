<template>
  <app-page title="Заявка"></app-page>
</template>

<script>
import { useRoute } from "vue-router";
import AppPage from "../components/ui/AppPage";

export default {
  name: "Request",
  setup() {
    const route = useRoute()
    console.log(route.params.id);

    return {

    }
  },
  components: {
    AppPage
  }
}
</script>

<style scoped>

</style>
