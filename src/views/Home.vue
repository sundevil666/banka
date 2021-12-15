<template>
  <div class="home card">
    <app-page title="Список заявок">
      <template #header>
        <button class="btn primary" @click="modal = true">Создать</button>
      </template>
      <request-table :requests="requests" />
    </app-page>
  </div>

  <teleport to="body">
    <app-modal
        v-if="modal"
        title="Создать заявку"
        @close="modal = false"
    >
      <request-modal @created="modal = false" />
    </app-modal>
  </teleport>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
import AppPage from "../components/ui/AppPage";
import RequestTable from "../components/request/RequestTable";
import AppModal from "../components/ui/AppModal";
import RequestModal from "../components/request/RequestModal";

export default {
  name: 'Home',
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal
  },
  setup() {
    const store = useStore()
    const modal = ref(false)
    const requests = computed(() => store.getters['requests/requests'])

    return {
      modal, requests
    }
  }
}
</script>
