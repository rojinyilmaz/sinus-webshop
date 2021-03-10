<template>
<div class="main">
    <h1>My account</h1>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Address:</p>
    <template v-if="user.address">
      <p>Street: {{ user.address.street }}</p>
      <p>Zipcode: {{ user.address.zip }}</p>
      <p>City: {{ user.address.city }}</p>
    </template>
    <h1>Order History</h1>
    <template v-if="orderHistory.length">
      <ul v-for="(item, index) in orderHistory" :key="index">
        <li>{{ item.title }}</li>
        <li>{{ item.price }} kr</li>
        
      </ul>
    </template>
    <template v-else>
      <p>You have no order history</p>
    </template>
    <button @click="logOut">Log out</button>
  </div>
  
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user
        },
        orderHistory() {
            return this.$store.state.orderHistory
        }
    },
    methods: {
    logOut() {
      this.$store.dispatch('logOut');
    }
  }

}
</script>

<style scoped>
.main {
   background-color: white;
    width: 95%;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1 {
  color: black;
}
p {
  color: black;
  margin-bottom: 10px;
  margin-top: 0px;
}

ul {
  list-style: none;
}

button {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 12rem;
  height: 3rem;
  border-radius: 2rem;
  outline: none;
  border: 1px solid #36B52B;
  background-color: #36B52B;
  color: black;
  font-size: 1rem;
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

