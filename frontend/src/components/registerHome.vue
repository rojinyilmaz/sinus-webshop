<template>
  <div>
      <div class= "container">
      <h1>Hello, friend!</h1>
      <p>Don't have an account yet?</p>
      <button @click="toRegister">Sign up</button>
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
    
    background: linear-gradient(to bottom right, #121312, #020202);
    width: calc(20% - 90px);
    padding: 20px 60px;
    border-radius: 20px;
    
    margin-left:auto;
    margin-right:auto;
    display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  

}

h1{
  font-size: 30px;
    
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color : white;
}

button{
    
    border-radius: 20px;
    border: 1px solid ;
    background-color: rgb(238, 233, 233);
    color: black;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform .1s ease-in;

    &:active {
      transform: scale(.9);
    }

    &:focus{
      outline: none;
    }
}

</style>