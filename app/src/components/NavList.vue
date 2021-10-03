<template>
  <div class="navigation">
    <nav class="nav__list">
      <router-link class="page__tab" to="/">Последние новости</router-link>
      <router-link class="page__tab" to="/todos">Дела</router-link>
    </nav>
    <div class="user">
      <button class="page__tab" @click.prevent="openDropdown">
        Профиль
      </button>
      <ul id='dropdown' class='dropdown-content'>
          <li>
            <router-link class="dropdown__link" to="/registration">Регистрация</router-link>
          </li>
          <li>
            <router-link class="dropdown__link" to="/login">Войти</router-link>
          </li>
          <li>
            <a href="#" class="dropdown__link" @click.prevent="logOut">Выйти</a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    userInfo: null,
    dropdown: null,
  }),
  methods: {
    logOut () {
      this.$router.push('./login')
    },
    openDropdown() {
      document.getElementById('dropdown').classList.toggle(`visible`)
    }
  },
}
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
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

.user {
  position: relative,
}

.dropdown-content {
  display: none;
  min-width: 180px;
  padding: 1rem 2rem;
  list-style: none;
  background-color: rgb(220, 226, 245);
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3), 0px 4px 50px rgba(0, 0, 0, 0.25);
}

.visible {
  position: absolute;
  display: block;
  right: 10px;
}

.dropdown__link {
  display: block;
  text-decoration: none;
}

.dropdown__link:not(:last-child) {
  margin-bottom: 2rem;
}

</style>