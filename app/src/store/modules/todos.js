import { todosCollection, db } from '@/firebase'
import { getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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
      const docId = String(id)
      deleteDoc(doc(db, "todos", docId));
    },
    //создание нового дела
    async createTodos(state, newTodo) {
      const auth = getAuth();
      const user = auth.currentUser;

      class Todo {
        constructor (id, title, completed ) {
            this.user = user
            this.id = id;
            this.title = title;
            this.completed = completed;
        }
        toString() {
            return this.id + ', ' + this.title + ', ' + this.completed + ', ' + this.user;
        }
      }

      const todoConverter = {
        toFirestore: (newTodo) => {
            return {
              id: newTodo.id,
              title: newTodo.title,
              completed: newTodo.completed,
              user: user.email,
            };
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new (data.id, data.title, data.completed, data.user);
        }
      };

    
      const docId = String(newTodo.id)
      console.log(docId)
      const ref = doc(db, "todos", docId).withConverter(todoConverter);
      console.log(ref)

      try{
        state.todos.unshift(newTodo)
        await setDoc(ref, new Todo(newTodo.id, newTodo.title, newTodo.completed, user.email));
      } catch (error) {
        console.log(error.message)
        throw error
      }
    },
    //обновляем статус выполнения дела
    async updateCompleted(state, id) {
      try {
        const docId = String(id)
        console.log(docId)
        const ref = doc(db, "todos", docId)
        console.log(id)
        console.log(state.todos.id)
        state.todos = await state.todos.map(todo => {
          console.log(id)
          if (todo.id === id) {
            updateDoc(ref, {
              completed: !todo.completed
            })
            return todo.completed = !todo.completed
          }
        })
      } catch (error) {
        console.log(error.message)
        throw error
      }
    },
  },
  actions: {
    async fetchTodos(ctx) {
      const todos = [];

      try {
        const querySnapshot = await getDocs(todosCollection);
        const auth = getAuth();
        const user = auth.currentUser;
        querySnapshot.forEach((doc) => {  
           console.log(doc.data())
            if (user.email === doc.data().user) {
              todos.push(doc.data())
            }
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