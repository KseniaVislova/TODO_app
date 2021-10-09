import { createStore } from "vuex";
import news from "./modules/news";
import todos from "./modules/todos";

export default createStore({
  modules: {
    news,
    todos,
  },
});
