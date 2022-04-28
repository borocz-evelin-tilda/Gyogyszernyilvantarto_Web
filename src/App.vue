<template>
  
  <nav class="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style="display:none" id="mySidebar">
  <h1 class="w3-xxxlarge w3-text-theme">Medicine Hospital Information System</h1>
  <img id="logo" src="logo.png">
  <router-link to="/" class="w3-bar-item w3-button w3-hover-pale-red" onclick="w3_close()">Kijelentkezés <i class="fa fa-remove"></i></router-link>
  <router-link to="/patientTable" class="w3-bar-item w3-button w3-hover-pale-green" onclick="w3_close()">Személyes Adatok</router-link>
  <router-link to="/examinationTable" class="w3-bar-item w3-button w3-hover-pale-green" onclick="w3_close()">Vizsgálatai</router-link>
  <router-link to="/drugTable" class="w3-bar-item w3-button w3-hover-pale-green" onclick="w3_close()">Gyógyszerek</router-link>
  <router-link to="/findDoctor" class="w3-bar-item w3-button w3-hover-pale-green" onclick="w3_close()">Partner Rendelők</router-link>
  
  
</nav>
   


  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
