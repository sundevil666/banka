<template>
  <div class="breadcrumbs" v-if="back">
    <router-link to="/">Back</router-link>
  </div>
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
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    document.title = `${props.title} | Клон банки`
  }
}
</script>

<style scoped>

</style>
