<template>
    <div style="border: 1px solid #000;display: flex">
           <h1>这是home页</h1>
           <comA :count="count" :price="price "></comA>
        <br>
           <comB :count="count" :price="price " @add="add" @reduce="reduce"></comB>
    </div>
</template>

<script>
  import comA from './comA'
  import comB from './comB'
    export default {
        name:"home",
        data(){
          return{
            count:0,
            price:20
          }
        },
        components:{
          comA,
          comB
        },
      methods:{
        add(){
          this.count++
        },
        reduce(){
          this.count--
        }
      }
    }
</script>

<style scoped>
h1{
    background: red
}
</style>
