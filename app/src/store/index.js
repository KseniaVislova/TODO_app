import { createStore } from "vuex";
import news from "./modules/news";
import todos from "./modules/todos";
import currency from "./modules/currency";

export default createStore({
  modules: {
    news,
    todos,
    currency
  },
});
