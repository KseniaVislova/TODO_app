<template>
  <div>
    <h2 class="page__title">Новости</h2>
    <NavList />
    <Loader v-if="loading"/>
    <NewsList 
    v-else-if="allNews.length"
    v-bind:news='allNews'
     />
    <p v-else>No news!</p>
  </div>
</template>

<script>
import NewsList from '@/components/NewsList'
import NavList from '@/components/NavList';
import Loader from '@/components/Loader';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'news',
  computed: mapGetters(['allNews', 'newsCount']),
  methods: mapActions(['fetchNews']),
  components: {
    NewsList,
    Loader,
    NavList
  }, 
  async mounted() {
    //this.$store.dispatch('fetchNews')
    this.fetchNews();
  }
}
</script>