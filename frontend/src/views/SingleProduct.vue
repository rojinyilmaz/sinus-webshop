<template>
<div>
  <div>
  <h1>Product {{ id }}</h1>
  </div>
</div>
</template>

<script>
export default {
  props: ["id"]
}
</script>

<style scoped>
div{
  color: white;
}
</style>