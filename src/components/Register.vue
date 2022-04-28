<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Regisztráció</h1>
                <p>Kérjük a regisztrációt kezelő orvosánál igényelje.</p>
                <hr>

               
                <div class="clearfix">
                    <button type="button" class="cancelbtn" v-on:click="back">Vissza</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default({
    
    setup() {
        
    },
    methods:{
        back(){
            this.$router.push({ name: 'Login' });
        }
}
})
</script>

<style scoped>
    .container{
        width: 40%;
        padding: 16px;
    }
    hr {
        border: 1px solid #f1f1f1;
        margin-bottom: 25px;
    }
    button {
        background-color: #04AA6D;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
    }
    button:hover {
        opacity:1;
    }
    .cancelbtn {
        padding: 14px 20px;
        background-color: #f44336;
        float: left;
        width: 50%;
    }
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
</style>
