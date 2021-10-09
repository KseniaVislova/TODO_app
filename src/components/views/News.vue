<template>
  <div>
    <h2 class="page__title">Новости</h2>
    <NavList />
    <Loader class="loader" v-if="newsLoading" />
    <NewsList v-else-if="allNews.length" v-bind:news="allNews" />
    <p v-else>Нет новостей.</p>
  </div>
</template>

<script>
import NewsList from "@/components/NewsList";
import NavList from "@/components/NavList";
import Loader from "@/components/Loader";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "news",
  computed: mapGetters(["allNews", "newsCount", "newsLoading"]),
  methods: mapActions(["fetchNews"]),
  components: {
    NewsList,
    Loader,
    NavList,
  },
  async mounted() {
    this.fetchNews();
  },
};
</script>

<style scoped>
.loader {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
