<template>
  <nav class="navbar the-nav-bar">
    <h3>Online banka</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Заявки</router-link>
      </li>
      <li>
        <router-link to="/">Помощь</router-link>
      </li>
      <li><a href="#">Помощь</a></li>
      <li><a href="#">Выход</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNavBar"
}
</script>

<style scoped>

</style>
