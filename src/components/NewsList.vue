<template>
  <div>
    <ul>
      <NewsItem
        v-bind:key="news.id"
        v-for="(news, i) of news"
        v-bind:news="news"
        v-bind:index="i"
      />
    </ul>
  </div>
</template>

<script>
import NewsItem from "@/components/NewsItem";

export default {
  props: ["news"],
  components: {
    NewsItem,
  },
};
</script>

<style scoped>
ul {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

@media (max-width: 768px) {
  ul {
    flex-direction: column;
  }
}
</style>
