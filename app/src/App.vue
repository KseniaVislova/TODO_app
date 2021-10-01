<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>    
  </div>
</template>


<style>  
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(118.54deg, #7363d8 1.88%, #9eabdc 100.7%);
}

.container {
  padding: 2rem;
  color: #2c3e50;
  background-color: #9eabdc;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3), 0px 4px 50px rgba(0, 0, 0, 0.25);
}

.page__title {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: 'Pacifico', cursive;
  font-size: 3.5rem;
}
</style>
