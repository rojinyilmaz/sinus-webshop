<template>
  <div>
      <h3 class="deliverytext">Delivery adress</h3>
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

<form  @submit.prevent="onSubmit">
  <div class="payment">
   <h3>Payment method</h3>
 <img src="../assets/klarna.svg" alt="klarna">
    <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
<img src="../assets/mastercard.svg" alt="mastercard">
  <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
 <img src="../assets/paypal.svg" alt="paypal">
  <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
 <img src="../assets/visa.svg" alt="visa">
  <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
  </div>
    <br>
    <input class="submit" type="submit" value="Finish" >
  </form>

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
            city: '',
            items: {}
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },
        loggedIn(){
            return this.$store.state.loggedIn
        },
        cart() {
          return this.$store.state.cart
        }
    
    },
    mounted() {
      if(this.loggedIn) {
        this.name = this.user.name
        this.email = this.user.email
        this.street = this.user.address.street
        this.zip = this.user.address.zip
        this.city = this.user.address.city
      }

    },
    methods: {
      onSubmit() {
        this.items = this.cart
        this.$store.dispatch('submitOrder', this.items)
        this.$router.push('/')
      }
    }

}
</script>

<style scoped>

h3{
    text-decoration: underline;
}

.deliverytext{
    text-decoration: underline;
    margin-left: 1em;
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

.payment{
  display: grid;
  position: absolute;
    left: 55rem;
   top: 14.5rem;
    grid-gap: 15px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 3.5px;
  bottom: 3.5px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #36B52B;
}

input:focus + .slider {
  box-shadow: 0 0 1px #36B52B;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}


.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>