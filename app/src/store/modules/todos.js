export default ({
  state: {
    todos: [],
    loading: true,
  },
  getters: {
    allTodos(state) {
      return state.todos
    },
    todosCount(state) {
      return state.todos.filter(t => !t.completed && t.title).length;
    },
    validTodos(state) {
      return state.todos.filter(todo => {
        return todo.title
      })
    }, 
    presentLoading(state) {
      return state.loading
    },
    completedTodos(state) {
      return state.todos.filter(t => t.completed && t.title)
    },
    notCompletedTodos(state) {
      return state.todos.filter(t => !t.completed && t.title)
    },
  },
  mutations: {
    //Для обновления массива дел (получаем данные из базы данных)
    updateTodos(state, todos) {
      state.todos = todos;
    },
    updateLoading(state, loading) {
      state.loading = loading;
    },
    //удаляем дело из списка
    removeTodo(state, id) {
      state.todos = state.todos.filter(t => t.id !== id)
    },
    //создание нового дела
    createTodos(state, newTodo) {
      state.todos.unshift(newTodo)
    },
    //обновляем статус выполнения дела
    updateCompleted(state, id) {
      state.todos = state.todos.map(todo => {
        if (todo.id === id) {
          return todo.completed = !todo.completed
        }
      })
    },
  },
  actions: {
    async fetchTodos(ctx, limit = 6) {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=' + limit);
      const todos = await res.json();
      const loading = false;

      ctx.commit('updateTodos', todos)
      ctx.commit('updateLoading', loading)
    },
    updateTodo(ctx, id) {
      ctx.commit('updateTodos', id)
    }
  },
});