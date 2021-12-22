<template>
  <div v-if="sidebar" class="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>
    <div class="sidebar-content">Добро пожаловать</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "TheSidebar",
  setup() {
    const store = useStore()

    const sidebar = computed(() => store.state.sidebar)

    return {
      sidebar,
      close: () => store.commit('closeSidebar')
    }
  }
}
</script>

<style scoped>

</style>
