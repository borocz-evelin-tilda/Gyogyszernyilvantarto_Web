<template>

<header class="w3-container w3-theme w3-padding">
  <!-- <i onclick="w3_open()" class="fa fa-bars w3-xlarge w3-button w3-theme w3-left"></i>  -->
  
     <div class="w3-center">
      <img id="logo" src="logo.png">
     </div>
   
  <div class="w3-center">
    
    <h1 class="w3-xxxlarge">MHIS</h1>
    <h4>Medicine Hospital Information System </h4>

    <div class="w3-padding-32">
    </div>
  </div>
  

   
</header>



<div class="w3-row-padding w3-center w3-margin-top">

<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Rólunk</h3><br>
  <i class="fa fa-group w3-margin-bottom w3-text-theme" style="font-size:120px"></i><br>
  <ul style="list-style-type: none;">
    <li>Megbízható minőség</li><br>
    <li>Szenvedélyes programozók és dizájnerek</li><br>
    <li>Remek csapatmunka</li>
  </ul>
  
  </div>
</div>

<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Bejelentkezés</h3><br>
  <i class="fa fa-sign-in w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  
<div class="w3-row">
  <div class="w3-third w3-container"></div>
  <form class="w3-container  w3-third">
      <label>Felhasználónév:</label>
      <input v-model="user.username" ref="username" type="text" class="w3-input w3-border w3-round w3-hover-pale-green"  name="un"><br>
      <label>Jelszó:</label>
      <input v-model="user.password" ref="psw" type="password" class="w3-input w3-border w3-round w3-hover-pale-green"  name="password"><br>
      
  <button class="w3-button w3-green" type="button" v-on:click="login">Bejelentkezés</button>
  
  </form>
  <div class="w3-third w3-container"></div>
</div>
  
  </div>
</div>



<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Kapcsolat</h3><br>
  <i class="fa fa-envelope w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <ul style="list-style-type: none;">
    <li><b>Email:</b> info@mhis.com</li><br>
    <li><b>Telefonszám:</b> +36 90 / 989 898</li><br>
    <li>6722 Szeged, Gutenberg u. 11.</li>
  </ul>
  </div>
</div>
</div>



<footer class="w3-container w3-theme-dark w3-padding-16 w3-center">
  <h3>Üdvözöljük az Medicine Hospital Information System weboldalán</h3><br>
    <ul style="font-size: 1.5rem;list-style-type: none;">
      <li>Adatai megtekintéséhez jelentkezzen be!</li>
      <li>Regisztráljon orvosánál!</li>
    </ul>
  
  
</footer>


</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

 
export default {
   

    data(){
        return{
            user:{
                username:"",
                password:""
           
            }
        }
    },
    
    methods:{
        
 
       
        async login(){
         
       if(this.checkValidation()){
           let username=this.user.username;
           let password=this.user.password;
                await axios.get(this.hostname+'/api/User/signin/'+username+'/'+password) 
                     .then(response => {
                        localStorage.setItem('user', JSON.stringify(response.data));
                        localStorage.setItem('userID', JSON.stringify(response.data.taj));
                        if( response.data.taj>0){
                          console.warn(response.data)
                           
                              Swal.fire("Sikeres bejelentkezés!");
                             this.$router.push({name:"patientTable"});
                         }
                         })
                   
                    .catch(error => {
                        if (error.response) {
                            Swal.fire(error.response.data, "Hiba!");
                            
                        }
                    });
        }
             },
        
        checkValidation(){
            if(!this.user.username){
                this.$refs.username.focus();
                Swal.fire("Adja meg a felhasználónevét!");
                return;
            }
            if(!this.user.password){
                this.$refs.psw.focus();
                Swal.fire("Adja meg a jelszavát!");
                return;
            }
            return true;
        },
      
		
	
   }
}
</script>

<style>

</style>
