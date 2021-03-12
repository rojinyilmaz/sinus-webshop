<template>
  <div id="wrapper">
    <div id="bImage">
      <img :src="require(`../assets/${product.imgFile}`)" id="bImg" /><br> />
    </div>
    <div id="bDesc">
      <h1>{{ product.title }}</h1>
      <p id="price">{{ product.price }} SEK</p>
      <p id="pDesc">
        {{ product.longDesc }}
      </p>
      <p>{{product.shortDesc}}</p>
      <button @click="addCart">ADD TO CART</button><br />
      <img id="stars" src="../assets/RatingStars.svg" />
    </div>
    <TheNav />
  </div>
</template>

<script>
import TheNav from './TheNav.vue';
export default {
  components: { TheNav },
  created: function () {
    this.id = this.$route.params.id;
  },

  data: function () {
    return {
      id: null,
    };
  },
  computed: {
    product: function () {
      return this.$store.getters.getProductById(this.id);
    },
  },
   methods:{
      addCart() {
        this.$store.commit('addProductToCart', this.product);
      }
    },
};
</script>

<style scoped>
#wrapper {
  color: black;
  display: flex;
  height: 40em;
  margin: 4em;
}
#bImage {
  width: 50%;
  min-height: 100%;
  
}
#bImg {
  min-width: 50%;
  margin: 0;
  background-image: linear-gradient(black, white);
  min-height: 100%;
}

#bDesc {
  width: 40%;
  background-color: white;
  display: flex row;
  align-content: center;
  padding-top: 4em;
}

#pDesc {
  padding: 0 2em 2em 2em;
}

button {
  width: 80%;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border: solid;
  border-color: black;
  border-radius: 0.3em;
  background-color: black;
  color: white;
  margin-top: 2em;
}

button:active {
  background-color: grey;
}

#stars{
  margin-top: 1em;
}

</style>