<template>
  <div
      v-if="message"
      class="alert app-message"
      :class="[messageType]"
  >
    <p class="alert-title">{{ title }}</p>
    <p>{{ messageValue }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "AppMessage",
  setup() {
    const store = useStore()
    const TITLE_MAP = {
      primary: 'Успешно',
      danger: 'Ошибка',
      warning: 'Внимание'
    }
    const message = computed(() => store.state.message)
    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)
    const messageType = computed(() => message.value?.type)
    const messageValue = computed(() => message.value?.value)

    const close = () => store.commit('clearMessage')
    return {
      message,
      title,
      messageValue,
      messageType,
      close
    }
  }
}
</script>

<style scoped>

</style>
