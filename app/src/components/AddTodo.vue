<template>
  <form class="form" @submit.prevent="onSubmit">
    <input class="input__text" type="text" v-model="title">
    <button type="submit">Create</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapMutations(['createTodos']),
    onSubmit() {
      this.createTodos({
        id: new Date().getTime(),
        title: this.title,
        completed: false
      })
      this.title = '';
    }
  }
}
</script>

<style scoped>
  .form {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  input {
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
  }

  .input__text {
   flex: 3;
  }

  .input__date {
   flex: 1;
  }

  button {
    flex: 1;
    color: #fff;
    background-color: #222;
    border: none;
    border-radius: 1rem;
  }
</style>