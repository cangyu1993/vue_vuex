<template>
  <div>
    <h1>
      小计：{{total}}
    </h1>
  </div>
</template>

<script>
    export default {
        name: "comA1",
        computed:{
          total(){
            return  this.$store.state.count*this.$store.state.price
          }
        }
    }
</script>

<style scoped>

</style>
