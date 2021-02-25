<template>
<section class="productSection">
    <div v-for ="c in test" :key=c.id>
        <div class="pwrapper">
            <h3>{{c.name}}</h3>
            <p>{{c.desc}}</p>
            <h4>{{c.price}} €</h4>
        </div>
    </div>
    <div v-for ="c in testc" :key=c.id>
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
        return this.$store.getters.skateboards;
    },
    testc()
    {
        return this.$store.getters.clothes;
    }
}

}

</script>
<style scoped>

.productSection{
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  justify-content: space-evenly;
}

.pwrapper{
    text-align: center;
}

</style>