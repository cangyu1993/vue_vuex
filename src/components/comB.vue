<template>
    <div>
      <button class="btn" @click="reduce">-</button>
      <strong>{{count}}</strong>
      <button class="btn" @click="add">+</button>
      <span>单价：{{price}}</span>
      <button @click="handleClick">兄弟组件传值（跨级）</button>
    </div>
</template>

<script>
  import bus from '../bus/index'
    export default {
        name: "comB",
        data(){
          return{
            msg:"来自兄弟组件B的内容"
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
      methods:{
        reduce(){
          this.$emit('reduce')
        },
        add(){
          this.$emit('add')
        },
        handleClick(){
          bus.$emit('toData',this.msg)
        }
      }
    }
</script>

<style scoped>
.btn{
  width: 200px;
  height: 100px;
  background-color: deepskyblue;
  font-size: 30px;
}
</style>
