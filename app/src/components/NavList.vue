<template>
  <div class="navigation">
    <nav class="nav__list">
      <router-link class="page__tab" to="/">Новости</router-link>
      <router-link class="page__tab" to="/currency">Курс валют</router-link>
      <router-link class="page__tab" to="/todos">Дела</router-link>
    </nav>
    <button class="user page__tab">Вход</button>
  </div>
</template>

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
</style>