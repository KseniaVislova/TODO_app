<template>
  <form class="form" @submit.prevent="onSubmit">
    <input class="input__text" type="text" v-model="title" />
    <button type="submit">Создать</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapMutations(["createTodos"]),
    onSubmit() {
      if (this.title) {
        this.createTodos({
          id: new Date().getTime(),
          title: this.title,
          completed: false,
        });
      }
      this.title = "";
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

input {
  flex: 3;
  margin-right: 1rem;
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  box-sizing: border-box;
}

button {
  padding: 1rem 2rem;
  flex: 1;
  font-size: 1.2rem;
  color: #fff;
  background-color: #222;
  border: none;
  border-radius: 1rem;
}

@media (max-width: 767px) {
  .form {
    flex-direction: column;
  }

  .input__text {
    width: 100%;
    margin: 0 auto 1rem;
  }

  button {
    width: 100%;
    margin: 0 auto 1rem;
  }
}
</style>
