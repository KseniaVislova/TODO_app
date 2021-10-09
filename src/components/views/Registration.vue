<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="onSubmit">
      <div class="form__content">
        <h3 class="form__title">Регистрация</h3>
        <div class="input-field">
          <small
            class="invalid"
            v-for="(error, index) of v$.form.email.$errors"
            :key="index"
            >Введите email</small
          >
          <input
            id="email"
            type="text"
            v-model="v$.form.email.$model"
            :class="{ invalid: v$.form.email.$errors.length }"
          />
          <label for="email">Email</label>
        </div>
        <div class="input-field">
          <small
            class="invalid"
            v-for="(error, index) of v$.form.password.$errors"
            :key="index"
            >Введите корректный пароль</small
          >
          <input
            id="password"
            type="password"
            :class="{ invalid: v$.form.password.$errors.length }"
            v-model="v$.form.password.$model"
          />
          <label for="password">Пароль</label>
        </div>
        <div class="input-field">
          <small
            class="helper-text invalid"
            v-for="(error, index) of v$.form.name.$errors"
            :key="index"
            >Введите свое имя</small
          >
          <input
            id="name"
            type="text"
            :class="{ invalid: v$.form.name.$errors.length }"
            v-model="v$.form.name.$model"
          />
          <label for="name">Имя</label>
        </div>
        <p>
          <label>
            <input type="checkbox" />
            <span>С правилами согласен</span>
          </label>
        </p>
      </div>
      <div class="form__action">
        <button type="submit" :disabled="v$.form.$invalid">
          Зарегистрироваться
        </button>
        <p>
          Уже есть аккаунт?
          <router-link to="/login">Войти!</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { createUser } from "@/firebase";
import router from "@/router";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: "",
      },
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  methods: {
    onSubmit() {
      router.push({ path: "/login" });
      createUser(this.form.email, this.form.password, this.form.name).then(
        function () {
          alert("Your account has been created");
        },
        function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        }
      );
      this.form.email = "";
      this.form.password = "";
      this.form.name = "";
    },
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(6),
        },
        name: {
          required,
          min: minLength(2),
        },
      },
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form {
  width: 50%;
  min-width: 180px;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgb(220, 226, 245);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3), 0px 4px 20px rgba(0, 0, 0, 0.25);
}

.form__title {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.input-field {
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 1rem;
}

input {
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3), 0px 4px 20px rgba(0, 0, 0, 0.25);
}

label {
  display: block;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.8rem;
}

.form__action {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin: 0 auto;
  padding: 0.5rem 1rem;
}

.invalid {
  font-size: 0.5rem;
  color: red;
}
</style>
