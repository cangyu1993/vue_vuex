<template>
    <div>
      <h1>
        小计：{{total}}
      </h1>
      <h2>{{msg}}</h2>
    </div>
</template>

<script>
  import bus from '../bus/index'
    export default {
        name: "comA",
      data(){
          return{
            msg:""
          }
      },
        props:{
          count:{
            type:Number
          },
          price:{
            type:Number
          }
        },
      computed:{
          total(){
            return this.count*this.price
          }
      },
      created(){
          bus.$on('toData',(msg)=>{
            this.msg = msg
          })
      }
    }
</script>

<style scoped>

</style>
