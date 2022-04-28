<template>
   
    <div class="container">
      <router-view></router-view>
    </div>
</template>

<script>


export default {
  name: 'App',
  setup(){
     
  },

  components: {

  },
    head: {
       link: [
             {
                 rel: "icon",
                 href: require("./assets/favicon.png")
             },
          ]
       }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c5045;
  margin-top: 60px;
}
</style>
