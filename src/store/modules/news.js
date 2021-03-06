import { newsCollection } from "@/firebase";
import { getDocs } from "firebase/firestore";

export default {
  state: {
    news: [],
    loading: true,
  },
  getters: {
    allNews(state) {
      return state.news;
    },
    newsCount(state) {
      return state.news.length;
    },
    newsLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    updateNews(state, news) {
      state.news = news;
    },
    updateNewsLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async fetchNews(ctx) {
      const news = [];

      try {
        const querySnapshot = await getDocs(newsCollection);

        querySnapshot.forEach((doc) => {
          news.push(doc.data());
        });

        const loading = false;
        ctx.commit("updateNews", news);
        ctx.commit("updateNewsLoading", loading);
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    },
  },
};
