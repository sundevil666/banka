<template>
  <h4 v-if="requests.length === 0" class="text-center">Заявко нет</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <td>#</td>
        <td>ФИО</td>
        <td>Телефон</td>
        <td>Суммф</td>
        <td>Статус</td>
        <td>Действие</td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(r, idx) in requests"
        :key="r.id"
      >
        <td>{{ idx + 1}}</td>
        <td>{{ r.fio }}</td>
        <td>{{ r.phone }}</td>
        <td>{{ currency(r.amount) }}</td>
        <td><app-status :type="r.status"></app-status></td>
        <td>
          <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: r.id}}">
            <button class="btn primary" @click="navigate">Open</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import  { currency} from "../../utils/currency";
import AppStatus from "../ui/AppStatus";

export default {
  name: "RequestTable",
  props: {
    requests: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    AppStatus
  },
  setup() {
    return {
      currency
    }
  }
}
</script>

<style scoped>

</style>
