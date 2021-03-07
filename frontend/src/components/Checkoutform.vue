<template>
  <div>
      <h3>Delivery adress</h3>
      <form class="delivery">
    <label for="name">Name</label>
    <input class="name" type="text" v-model="name">

    <label for="email">Email</label>
    <input class="email" type="text" v-model="email">

    <label for="street">Street</label>
    <input class="street" type="text" v-model="street">

    <label for="zip">Zip</label>
    <input class="zip" type="text" v-model="zip">

    <label for="city">City</label>
    <input class="city" type="text" v-model="city">
  
    <input class="submit" type="submit" value="Submit">
  </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            street: '',
            zip: '',
            city: ''
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },
        loggedIn(){
            return this.$store.state.loggedIn
        },
    
    },
    mounted() {
      if(this.loggedIn) {
        this.name = this.user.name
        this.email = this.user.email
        this.street = this.user.address.street
        this.zip = this.user.address.zip
        this.city = this.user.address.city
      }
    }

}
</script>

<style scoped>

h3{
    text-decoration: underline;
    margin-left: 3em;
}

label{
  font-size: 15px;
}

input[type=text] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

}


.submit{
  width: 20%;
  background-color: #36B52B;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.delivery {
  display: grid;
  grid-template-columns: 1fr;
    grid-gap: 1px;
  border-radius: 5px;
  background-color: #ffff;
  padding: 20px;
}




</style>