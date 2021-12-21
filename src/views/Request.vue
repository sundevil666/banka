<template>
  <app-loader v-if="loading" />
  <app-page v-else-if="request" title="Заявка" back>
    <p>{{ request.fio }}</p>
    <p>{{ request.phone }}</p>
    <p>{{ currency(request.amount) }}</p>
    <p><app-status :type="request.status"></app-status></p>
    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершон</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <div>
      <button class="btn danger" @click="remove">Remove</button>
      <button v-if="hasChanges" class="btn" @click="update">Update</button>
    </div>
  </app-page>
  <h3 v-else>id {{ $route.params.id }} not found</h3>
</template>

<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import AppPage from "../components/ui/AppPage";
import AppLoader from "../components/ui/AppLoader";
import {currency} from "../utils/currency";
import AppStatus from "../components/ui/AppStatus";

export default {
  name: "Request",
  setup() {
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const loading = ref(true)
    const request = ref({})
    const status = ref()

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('requests/loadById', route.params.id)
      status.value = request.value?.status
      loading.value = false
    })

    const hasChanges = computed(() => request.value.status !== status.value)

    const remove = async () => {
      await store.dispatch('requests/remove', route.params.id)
      router.push('/')
    }
    const update = async () => {
      const data = {...request.value, status: status.value, id: route.params.id}
      await store.dispatch('requests/update', data)
      request.value.status = status.value
    }

    return {
      status,
      loading,
      request,
      currency,
      remove,
      update,
      hasChanges
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
