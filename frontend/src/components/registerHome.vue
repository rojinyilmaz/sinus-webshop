<template>
  <div>
      <div class= "container">
      <h1>Hello, friend!</h1>
      <p>Don't have an account yet?</p>
      <button @click="toRegister">REGISTER</button>
      </div>
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

<style lang="scss" scoped>

.container{
    background-color: white;
    width: 95%;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1{
  font-size: 30px;
  color: black;
}

button {
    display: block;
    width: 12rem;
    height: 3rem;
    border-radius: 2rem;
    outline: none;
    border: 1px solid #36B52B;
    background-color: #36B52B;
    color: black;
    font-size: 1rem;
    margin-top: 20px;
    margin-bottom: 50px;
}

button:hover {
    background-color: black;
    color: white;
    border: none;
}

button:active {
    transform: scale(.9);
}

button:focus {
    outline: none;
}
</style>