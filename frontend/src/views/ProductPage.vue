<template>

<section class="productwrapper">
  <section class="productSection">
      <Product v-for="product in products" v-bind:key="product._id" v-bind:product="product"/>
    <the-nav/>
</section>
 
</section>

</template>

<script>
import Product from '@/components/Product.vue'
import TheNav from '../components/TheNav.vue'

export default {
    components: { Product },
    TheNav,
 created: function () {
   this.$store.dispatch("getProducts")
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    }
}
</script>

<style scoped>
.productwrapper{
    padding-top: 4em;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

.productSection{
    text-align: center;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    padding-left: 2em;
    padding-right: 2em;
}



</style>
