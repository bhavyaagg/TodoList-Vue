<template>
  <div id="container">
    <input type="text" v-model="newTaskValue"/>
    <button v-on:click="addTask">Add Task</button>
    <button @click="deleteTasks">Clear</button>
    <ol>
      <li v-for="(todo, index) in getTodos">
        <input type="checkbox" @click="changeStyle(index)" v-bind:checked="checkDone(index)"/>
        <span v-bind:class="{'strike-through' : checkDone(index)}">{{todo.task}}</span>
        <input type="button" value="Delete" @click="deleteTask(index)"/>
      </li>
    </ol>
  </div>
</template>

<script>
  import $store from '@/store'

  export default {
    name: 'todolist',
    data () {
      return {
        newTaskValue: ''
      }
    },

    computed: {
      getTodos: function () {
        return $store.state.todoListArray
      }
    },
    methods: {
      addTask () {
        var newTask = {
          task: this.newTaskValue,
          done: false
        }

        $store.commit('addTodo', newTask)
        this.updateTodosToLocalStorage()
        this.newTaskValue = ''
      },
      deleteTask (index) {
        $store.commit('deleteTodo', index)
        this.updateTodosToLocalStorage()
      },
      changeStyle (index) {
        $store.commit('changeStyle', index)
        this.updateTodosToLocalStorage()
      },
      checkDone: function (index) {
        return $store.state.todoListArray[index].done
      },
      deleteTasks () {
        var todos = this.getTodos
        for (let index = 0; index < todos.length;) {
          if (todos[index].done) {
            this.deleteTask(index)
          } else {
            index++
          }
        }
      },
      updateTodosToLocalStorage () {
        localStorage.setItem('todos', JSON.stringify(this.getTodos))
      }
    }
  }
</script>

<style>
  #container {
    padding: 50px;
  }

  .strike-through {
    text-decoration: line-through;
  }

  input[type="Button"] {
    margin-left: 50px;
  }

  input[type="checkbox"] {
    margin: 0 50px;
  }

  li {
    margin-top: 20px;
  }
</style>
