<template>
  <div main>
    <h1>My account</h1>
    <p>Name: {{ me.name }}</p>
    <p>Email: {{ me.email }}</p>
    <p>Address:</p>
    <template v-if="me.address">
      <p>Street: {{ me.address.street }}</p>
      <p>Zipcode: {{ me.address.zip }}</p>
      <p>City: {{ me.address.city }}</p>
    </template>
    <h1>Order History</h1>
    <template v-if="me.orderHistory">
      {{ me.orderHistory }}
    </template>
    <template v-else>
      <p>You have no order history</p>
    </template>
    <button @click="logOut">Log out</button>
  </div>
</template>

<script>
import { ME_URL, get } from "../api/api.js";

export default {
  data() {
    return {
      me: {},
    };
  },
  async created() {
    const response = await get(ME_URL);
    console.log(response);
    console.log(response.data);
    this.me = response.data;
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut');
    }
  }
};
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
  color: white;
}
p {
  color: white;
}

button {
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
</style>