<template>
  <li>
      <h3>{{ news.title }}</h3>
      <img :src="news.urlToImage"  alt="">
      <p>{{ news.content }}</p>
      <p>{{ news.author }}</p>
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
  li {
    width: 25%;
    padding: 0.5rem 2rem;
    margin: 0 auto 1rem;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
  }

  input {
    margin-right: 2rem;
  }

  strong {
    display: block;
    padding: 0.2em;
    margin-right: 1rem;
    border-radius: 50%;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    margin: 0;
    text-align: left;
  }

  button {
    color: #fff;
    background-color: red;
    border: none;
    border-radius: 50%;
  }

  .done {
    text-decoration: line-through;
  }

  img {
    width: 90%;
    height: auto;
    margin: 0 auto 1rem;
  }
</style>
