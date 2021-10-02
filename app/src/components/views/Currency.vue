<template>
  <div>
    <h2 class="page__title">Курс валют</h2>
    <NavList />
    <Loader class="loader" v-if="presentLoading"/>
    <p v-else-if="allCurrency.length">{{ allCurrency.base }}</p>
    <p v-else>Нет информации о курсе валюты</p>
  </div>
</template>

<script>
import NavList from '@/components/NavList';
import Loader from '@/components/Loader';
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['allCurrency','presentLoading']),
  methods: mapActions(['fetchCurrency']),
  components: {
    NavList,
    Loader
  },
  async mounted() {
    this.fetchCurrency();
  }
}
</script>