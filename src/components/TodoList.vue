<template>
  <div>
    <ul>
      <TodoItem
        v-bind:key="todo.id"
        v-for="(todo, i) of todos"
        v-bind:todo="todo"
        v-bind:index="i"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
ul {
  width: 100%;
  margin: 0 auto;
  list-style: none;
  padding: 0;
}
</style>
