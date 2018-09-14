<template>
    <div>
      <counter/>
      <comA1/>
      <input type="text" v-model="count" placeholder="亲输入数量：" @keyup="changeCount">
      <button @click="changeCount" >改变</button>
      <br>
      <input type="text" v-model="price" placeholder="亲输入单价：" @keyup="changePrice">
      <button @click="changePrice" >改变</button>
      <br>
    </div>
</template>

<script>
    import counter from './counter'
    import comA1 from './comA1'
    export default {
        name: "vuexDemo",
        data(){
          return{
            count:"",
            price:""
          }
        },
        components:{
          counter,
          comA1
        },
      methods:{
        changeCount(){
          this.$store.commit('CHANGE_COUNT',this.count)
        } ,
        changePrice(){
          this.$store.commit('CHANGE_PRICE',this.price)
        }
      }
    }
</script>

<style scoped>

</style>
