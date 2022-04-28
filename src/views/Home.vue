<template>

  
<div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            <div class="card px-5 py-5" id="form1">
                 
                 <div class="form-data" >
                     <img src="../assets/favicon.png" width="400" height="300" >
                    </div>
                    <p></p>
                <div class="form-data" >
                     <h2>MHIS <br>Medicine Hospital Information System</h2>
                    </div>
                     <h3>Kórházi Nyilvántartó rendszer</h3>
                    </div>
                    <div class="mb-3"> <div class="clearfix">
                         <button type="button" v-on:click="next">Tovább az oldalra >></button>
                    </div></div>
                </div>
                
            </div>
        </div>
 

</template>

<script>
export default {
    name: "Home",
        data(){
        return{
           
        }
    },
    
    methods:{
        next(){

this.$router.push({name: "Login"});
        }

    }
}
</script>

<style>

    .container{
        max-width: 160px;
        color: darkgreen;
        margin: 0;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    button{
        background-color: green;
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
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
    img{

   max-width: 180px;
   max-height: 160px;

    }
</style>