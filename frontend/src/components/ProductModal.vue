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
      <button>ADD TO CART</button><br />
      <img id="stars" src="../assets/RatingStars.svg" />
    </div>
  </div>
</template>

<script>
export default {
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
  width: 60%;
}
#bImg {
  min-width: 100%;
  min-height: 100%;
  margin: 0;
  background-color: grey;
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
}

button:active {
  background-color: grey;
}
</style>