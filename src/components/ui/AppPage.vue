<template>
  <div class="card app-page">
    <h1 class="card-title">
      {{ title }}
      <slot name="header" />
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppPage",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    document.title = `${props.title} | Клон банки`
  }
}
</script>

<style scoped>

</style>
