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
      <tr>
        <td>111</td>
        <td>111</td>
        <td>111</td>
        <td>111</td>
        <td>111</td>
        <td>111</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "RequestTable",
  props: {
    requests: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
