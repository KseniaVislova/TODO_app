<template>
  <div>
    <h2 class="page__title">Список дел</h2>
    <NavList />
    <AddTodo
      @add-todo="addTodo"
     />
     <select v-model='filter'>
       <option value="all">Все</option>
       <option value="completed">Завершенные</option>
       <option value="not-completed">Не завершенные</option>
     </select>
     <p>Осталось выполнить {{ todosCount }} задач:</p>
    <Loader class="loader" v-if="presentLoading"/>
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
    />
    <p v-else>No todos!</p>
  </div>
</template>


<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'
import NavList from '@/components/NavList'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'todos',
  data() {
    return {
      filter: 'all'
    }
  },
  computed: {...mapGetters(['todosCount', 'presentLoading']),
  filteredTodos() {
  if (this.filter === 'completed') {
    return this.$store.getters.completedTodos
  }
  if (this.filter === 'not-completed') {
    return this.$store.getters.notCompletedTodos
  }
  return this.$store.getters.validTodos
}},
  methods:
    mapActions(['fetchTodos']),
    getfilter() {
     this.updateFilter = this.filter
   },
  components: {
    TodoList,
    AddTodo,
    Loader,
    NavList
  },
  async mounted() {
    this.fetchTodos();
  },
 /* methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }*/
}
</script>

<style scoped>
select {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 1em;
}
</style>