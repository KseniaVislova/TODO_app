<template>
  <li class="news__item">
      <span class="news__image">
        <img class="news__img" :src="news.urlToImage">
      </span>
      <h3 class="news__title">{{ news.title }}</h3>
      <p class="news__description">{{ news.body }}</p>
  </li>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    },
    index: Number
  }, 
}
</script>

<style scoped>
  .news__item {
    width: 40%;
    padding: 2rem 2rem;
    margin: 0 auto 3rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3), 0px 4px 50px rgba(0, 0, 0, 0.25);
  }
  
  .news__image {
    display: block;
    width: 100%;
    height: 250px;
    margin: 0 auto 1rem;
    background-size: cover;
    overflow: hidden;
  }

  .news__img {
    width: 100%;
  }

  .news__title {
    font-size: 1.5rem;
    text-align: center;
  }

  .news__description {
    margin: 0 0 15px 0;
    text-align: left;
  }

  .news__src {
    margin: 0 0 30px 0;
    text-align: right;
  }

  .news__link {
    display: block;
    margin: 0 auto;
    width: 50%;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    color: #2c3e50;
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3), 0px 4px 50px rgba(0, 0, 0, 0.25);
  }
</style>
