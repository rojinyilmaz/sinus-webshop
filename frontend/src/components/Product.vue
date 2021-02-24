<template>
<section>
    <div v-for ="c in test" :key=c.id class="productSection">
        <div class="pwrapper">
            <h3>{{c.name}}</h3>
            <p>{{c.desc}}</p>
            <h4>{{c.price}} €</h4>
        </div>
    </div>
</section>
  
</template>

<script>
export default {

computed:{
    test()
    {
        return this.$store.getters.clothes;
    }
}

}

</script>
<style>

.productSection{
    display: grid;
    justify-content: center;
    align-content: space-between;
}

</style>