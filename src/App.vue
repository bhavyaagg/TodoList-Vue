<template>
  <div id="app">
    <todolist></todolist>
  </div>
</template>

<script>
  import todolist from '@/components/TodoList.vue'

  export default {
    components: {todolist},
    name: 'app'
  }
</script>

<style>
</style>
