export default ({
  state: {
    news: [],
  },
  getters: {
    allNews(state) {
      return state.news
    },
    newsCount(state) {
      return state.news.length;
    }
  },
  mutations: {
    updateNews(state, news) {
      state.news = news;
    }
  },
  actions: {
    async fetchNews(ctx) {
      const res = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-01&sortBy=publishedAt&apiKey=653d985befbc4b80bc2fb9eddb79b870');
      const news = await res.json();

      ctx.commit('updateNews', news.articles)
    }
  },
});