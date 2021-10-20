<template>
  <div class="navigation">
    <button class="burger-mobile" @click.prevent="openNav">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="nav__list nav__list-mobile" id="nav__list-mobile">
      <router-link class="page__tab" to="/">Последние новости</router-link>
      <router-link class="page__tab" to="/todos">Дела</router-link>
    </nav>
    <div class="user">
      <button class="page__tab" @click.prevent="openDropdown">Профиль</button>
      <ul id="dropdown" class="dropdown-content">
        <li v-if="!auth">
          <router-link class="dropdown__link" to="/registration"
            >Регистрация</router-link
          >
        </li>
        <li v-if="!auth">
          <router-link class="dropdown__link" to="/login">Войти</router-link>
        </li>
        <li v-if="auth">
          <a href="#" class="dropdown__link" @click.prevent="logOut">Выйти</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  data: () => ({
    userInfo: null,
    dropdown: null,
    auth: Boolean(getAuth().currentUser),
  }),
  methods: {
    async logOut() {
      const auth = getAuth();
      try {
        await signOut(auth);
        alert("Вы успешно вышли из аккаунта");
      } catch (error) {
        alert(error.message);
      }
      this.$router.push("./login");
    },
    openDropdown() {
      document.getElementById("dropdown").classList.toggle(`visible`);
    },
    openNav() {
      document
        .getElementById("nav__list-mobile")
        .classList.toggle(`visible-nav`);
    },
  },
};
</script>

<style scoped>
.navigation {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.nav__list {
  display: flex;
}

.page__tab {
  display: block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  color: #2c3e50;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3), 0px 4px 50px rgba(0, 0, 0, 0.25);
  transition: all 1s;
}

.page__tab:hover {
  color: #fff;
  background-color: #222;
  transition: all 1s;
}

.page__tab:not(:last-child) {
  margin-right: 1rem;
}

.dropdown-content {
  display: none;
  margin: 0;
  padding: 1rem 2rem;
  list-style: none;
  background-color: rgb(220, 226, 245);
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3), 0px 4px 50px rgba(0, 0, 0, 0.25);
}

.visible {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 4rem;
  right: 8px;
}

.dropdown__link {
  display: block;
  padding: 0.5rem 0;
  text-decoration: none;
  color: #222;
}

.dropdown__link:not(:last-child) {
  margin-bottom: 2rem;
}

.burger-mobile {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 60px;
  height: 30px;
  margin-bottom: 1rem;
  background: transparent;
  border: none;
}

.burger-mobile span {
  display: block;
  width: 100%;
  height: 0.3rem;
  background-color: #222;
}

@media (max-width: 767px) {
  .burger-mobile {
    display: flex;
  }

  .navigation {
    margin-bottom: 0;
  }

  .nav__list {
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }

  .page__tab {
    margin-bottom: 1rem;
  }

  .page__tab:not(:last-child) {
    margin-right: 0;
  }

  .visible-nav {
    position: absolute;
    display: flex;
    top: 4rem;
    padding: 1rem 2rem;
    background-color: rgb(220, 226, 245);
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3),
      0px 4px 50px rgba(0, 0, 0, 0.25);
  }

  .visible-nav .page__tab {
    display: block;
    margin: 0;
    padding: 0.5rem 0;
    background: transparent;
    text-decoration: none;
    font-size: 1rem;
    font-weight: normal;
    box-shadow: none;
  }
}
</style>
