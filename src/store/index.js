/**
 * Created by bhavya on 30/6/17.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoListArray: []
  },
  mutations: {
    addTodo (state, task) {
      state.todoListArray.push(task)
    },
    deleteTodo (state, taskId) {
      state.todoListArray.splice(taskId, 1)
    },
    changeStyle (state, taskId) {
      state.todoListArray[taskId].done = !state.todoListArray[taskId].done
    }
  }
})
