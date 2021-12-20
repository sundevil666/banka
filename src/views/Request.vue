<template>
  <app-loader v-if="loading" />
  <app-page v-else-if="request" title="Заявка">
    {{ request }}
    <app-status></app-status>
  </app-page>
  <h3 v-else>id {{ $route.params.id }} not found</h3>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import AppPage from "../components/ui/AppPage";
import AppLoader from "../components/ui/AppLoader";
import AppStatus from "../components/ui/AppStatus";

export default {
  name: "Request",
  setup() {
    const route = useRoute()
    const store = useStore()
    const loading = ref(false)
    const request = ref({})

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('requests/loadById', route.params.id)
      loading.value = false
    })

    return {
      loading,
      request
    }
  },
  components: {
    AppPage,
    AppLoader,
    AppStatus
  }
}
</script>

<style scoped>

</style>
