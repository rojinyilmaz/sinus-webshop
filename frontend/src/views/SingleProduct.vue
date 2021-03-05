<template>

<section class="wrapper">
<ProductModal/>
</section>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
export default {
components: {ProductModal},
  mounted() {
    this.$store.dispatch("getProducts", this.id)
  },
    computed:{
        products(){
            return this.$store.state.products
        }
    }
}
</script>

<style scoped>
.wrapper{
  color: aqua;
}
</style>