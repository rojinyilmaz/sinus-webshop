<template>
  <div>
      <h1>Hello, friend!</h1>
      <p>Don't have an account yet?</p>
      <button @click="toRegister">REGISTER</button>
  </div>
</template>

<script>
export default {
    methods: {
        toRegister() {
            this.$router.push('/register')
        }
    }

}
</script>

<style>

</style>