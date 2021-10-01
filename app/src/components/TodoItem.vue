<template>
  <li>
    <span :class="{done:todo.completed}">
      <input type="checkbox" :checked="todo.completed" @change="updateStatus">
      <p>{{ todo.title }}</p>
    </span>
    <button @click="remove">&times;</button>
  </li>
</template>

<!--- <li>
    <span v-bind:class="{done:todo.completed}">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed">
      <p>{{ todo.title }}</p>
    </span>
    <button v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li> --->

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  methods: {
    ...mapMutations(['removeTodo', 'updateCompleted']),
    remove() {
      this.removeTodo(this.todo.id)
    },
    updateStatus() {
      this.$store.commit('updateCompleted', this.todo.id);
    }
  }
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
</style>
