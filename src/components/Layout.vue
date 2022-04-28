<template>
    <button v-on:click="logout" class="my-button">Kilépés</button>
</template>

<script>

export default({
    data(){
        return{
            
        }
    },
    created() {
        document.title = this.$props.title;
    },
    props: {
        title: String
    },
    methods:{
        logout(){
            window.localStorage.clear();
            this.$router.push({ name: 'Login' });
        },
    }
})
</script>

<style scoped>
   .my-button {
        background: #25ac25;
        background-image: -o-linear-gradient(top, #3df656, #1ed04a);
        background-image: -webkit-gradient(to bottom, #3df65c, #1ed062);
        border-radius: 20px;
        color: white;
        font-family: Arial;
        box-shadow: 1px 1px 20px 0 #000000;
        text-shadow: 1px 1px 20px #000000; 
        border: solid #33ed96 1px;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        margin-right: 5px;
    }

    .my-button:hover {
        border: solid #33ed71 1px;
        background: #1ed059;
        background-image: -webkit-linear-gradient(top, #1ed08c, #3df6a0);
        background-image: -moz-linear-gradient(top, #1ed06e, #3df67b);
        background-image: -ms-linear-gradient(top, #1ed045, #3df684);
        background-image: -o-linear-gradient(top, #1ed077, #3df6b8);
        background-image: -webkit-gradient(to bottom, #1ed053, #3df6a9);
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        text-decoration: none;
    }
</style>
