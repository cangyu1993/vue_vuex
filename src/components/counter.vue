<template>
  <div>
    <button class="btn" @click="reduce">-</button>
    <strong>{{count}}</strong>
    <button class="btn" @click="add">+</button>
    <span>单价：{{price}}</span>
    <button >执行异步</button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
      name: "counter",
      methods:{
        reduce(){
           this.$store.commit('REDUCE_COUNT')
        },
        add(){
          this.$store.commit('ADD_COUNT')
        }
      },
      computed:{
        ...mapState(['count','price']),
      },

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
