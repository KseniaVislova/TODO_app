export default ({
  state: {
    news: [],
    loading: true,
  },
  getters: {
    allNews(state) {
      return state.news
    },
    newsCount(state) {
      return state.news.length;
    },
    presentLoading(state) {
      return state.loading
    },
  },
  mutations: {
    updateNews(state, news) {
      state.news = news;
    },
    updateLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async fetchNews(ctx) {
      const res = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-02&sortBy=publishedAt&apiKey=653d985befbc4b80bc2fb9eddb79b870');
      const news = await res.json();
      const loading = false;

      ctx.commit('updateNews', news.articles)
      ctx.commit('updateLoading', loading)
    }
  },
});