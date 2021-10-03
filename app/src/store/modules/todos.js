import { todosCollection } from '@/firebase'
import { getDocs } from "firebase/firestore";

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
    async fetchTodos(ctx) {
      const todos = [];

      try {
        const querySnapshot = await getDocs(todosCollection);

        querySnapshot.forEach((doc) => {
            todos.push(doc.data())
        })

        const loading = false;
        ctx.commit('updateTodos', todos)
        ctx.commit('updateLoading', loading)
      } catch (error) {
        console.log(error.message)
        throw error
      }
    },
    
    updateTodo(ctx, id) {
      ctx.commit('updateTodos', id)
    }
  },
});