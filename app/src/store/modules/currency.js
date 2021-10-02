export default ({
  state: {
    currency: [],
    loading: true,
  },
  getters: {
    allCurrency(state) {
      return state.currency
    },
    currencyCount(state) {
      return state.currency.length;
    },
    presentLoading(state) {
      return state.loading
    },
  },
  mutations: {
    updateCurrency(state, currency) {
      state.currency = currency;
    },
    updateLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async fetchCurrency(ctx) {
      const res = await fetch('https://openexchangerates.org/api/latest.json?app_id=2e170048f8c44999ad5cf034660a7b36');
      const currency = await res.json();
      const loading = false;

      ctx.commit('updateCurrency', currency)
      ctx.commit('updateLoading', loading)
    }
  },
});