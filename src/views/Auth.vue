<template>
  <form @submit.prevent="onSubmit" class="card">
    <h1>Войти в систему</h1>
    <div
        class="form-control"
        :class="{'invalid': eError}"
    >
      <label for="Email">Email</label>
      <input
          type="email"
          id="Email"
          v-model="email"
          @blur="eBlur"
      >
      <small v-if="eError">{{ eError }}</small>
    </div>
    <div
        class="form-control"
        :class="{'invalid': pError}"
    >
      <label for="Email">Password</label>
      <input type="password" id="Password" v-model="password" @blur="pBlur">
      <small v-if="pError">{{ pError }}</small>
    </div>
    <button class="btn primary" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
    <div v-if="isTooManyAttempts" class="text-danger">Вы слишком часто пытаетесь войти в систему</div>
  </form>
</template>

<script>
import { useLoginForm } from '../use/login-form'
export default {
  name: "Auth",
  setup () {
    return {...useLoginForm()}
  }
}
</script>

<style scoped>

</style>
