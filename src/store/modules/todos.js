import { todosCollection, db } from "@/firebase";
import { getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default {
  state: {
    todos: [],
    loading: true,
  },
  getters: {
    allTodos: (state) => state.todos,

    todosCount: (state) =>
      state.todos.filter((t) => !t.completed && t.title).length,

    todosLoading: (state) => state.loading,

    completedTodos: (state) => state.todos.filter((t) => t.completed),

    notCompletedTodos: (state) => state.todos.filter((t) => !t.completed),
  },
  mutations: {
    //Для обновления массива дел (получаем данные из базы данных)
    updateTodos(state, todos) {
      state.todos = todos;
    },
    updateTodosLoading(state, loading) {
      state.loading = loading;
    },
    //удаляем дело из списка
    async removeTodo(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id);
      const docId = String(id);
      await deleteDoc(doc(db, "todos", docId));
    },
    //создание нового дела
    async createTodos(state, newTodo) {
      const auth = getAuth();
      const user = auth.currentUser;

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
          return new (data.id, data.title, data.completed, data.user)();
        },
      };

      const docId = String(newTodo.id);
      const ref = doc(db, "todos", docId).withConverter(todoConverter);

      try {
        state.todos.unshift(newTodo);
        await setDoc(ref, {
          id: newTodo.id,
          title: newTodo.title,
          completed: newTodo.completed,
          user: user.email,
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    // обновляем статус выполнения дела
    async updateCompleted(state, id) {
      const foundTodo = state.todos.filter((todo) => todo.id === id)[0];

      if (foundTodo === undefined) return;

      const newStatus = !foundTodo.completed;

      foundTodo.completed = newStatus;

      try {
        const docId = String(id);
        const ref = doc(db, "todos", docId);

        await updateDoc(ref, {
          completed: newStatus,
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  actions: {
    async fetchTodos(ctx) {
      try {
        const todos = [];

        const querySnapshot = await getDocs(todosCollection);
        const auth = getAuth();
        const user = auth.currentUser;
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (user.email === data.user) {
            todos.unshift(data);
          }
        });

        const loading = false;
        ctx.commit("updateTodos", todos);
        ctx.commit("updateTodosLoading", loading);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    updateTodo(ctx, id) {
      ctx.commit("updateTodos", id);
    },

    changeTodo(ctx, id) {
      ctx.commit("updateCompleted", id);
    },
  },
};
