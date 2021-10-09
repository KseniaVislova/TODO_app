<template>
  <li>
    <span :class="{done:todo.completed}" :id="todo.id">
      <input type="checkbox" :checked="todo.completed" @change="updateStatus">
      <p>{{ todo.title }}</p>
    </span>
    <button @click="remove">&times;</button>
  </li>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  methods: {
    ...mapActions(['changeTodo']),
    ...mapMutations(['removeTodo']),
    remove() {
      this.removeTodo(this.todo.id)
    },
    updateStatus() {
      this.changeTodo(this.todo.id)
    },
    created(){
        this.fetchCompleted()
    },
  },

}
</script>

<style scoped>
  li {
    border-bottom: 1px solid #888;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  @media (max-width: 767px) {
    li {
      padding: 0.5rem 0rem;
    }
  }
</style>
