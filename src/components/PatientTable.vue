<template>
  <div class="patientTable">
<header class="w3-container w3-theme w3-padding">
  <i onclick="w3_open()" class="fa fa-bars w3-xlarge w3-button w3-theme w3-left"></i> 
  
     <div class="w3-center" style="margin-right:3rem">
      <img id="logo" src="logo.png">
     </div>
   
  <div class="w3-center">
    
    <h1 class="w3-xxxlarge">MHIS</h1>
    <h4>Medicine Hospital Information System </h4>

    <div class="w3-padding-32">
    </div>
  </div>
   
</header>
<div class="w3-row-padding w3-center">
    <div class="w3-row">
            <div class="w3-third w3-container"></div>
    <div class="w3-container w3-pale-green w3-leftbar w3-rightbar w3-bottombar w3-border-green w3-border w3-center w3-xlarge w3-third" >
        <p><b>Személyes adatok</b></p>
      </div>
     <div class="w3-third w3-container"></div>
     </div>

     <div class="w3-row">
     <div class="w3-third w3-container"></div>
     <div class="w3-third w3-container" style="margin-top:1rem">
       <label>Adja meg a TAJ számát</label>
      <input v-model="loggedInTaj" id="loggedInTaj" ref="loggedInTaj" type="number" placeholder="Adja meg a TAJ számát: "  class="w3-input w3-border w3-round w3-hover-pale-green"><br>
      <button class="w3-button w3-green" v-on:click="getPatients" style="margin-bottom:1rem">Keresés</button>
      </div>
     </div>
      
    <table class="w3-table-all  w3-hoverable" style="margin-bottom: 8rem;" >
        <thead>
        <tr class="w3-green w3-theme-dark">
          <th>Taj szám</th>
          <th>Felhasználónév</th>
          <th>Név</th>
          <th>Lakcím</th>
          <th>Születési idő</th>
          <th>Születési hely</th>
          <th>Allergia</th>
          <th>Email</th>
        </tr>
        </thead>

        <tr class="w3-hover-pale-green"  v-for="p in patients" v-bind:key="p.taj">
          <td>{{p.taj}}</td>
            <td>{{p.username}}</td>
            <td>{{p.p_name}}</td>
            <td>{{p.p_address}}</td>
            <td>{{p.p_birthday}}</td>
            <td>{{p.p_birthplace}}</td>
            <td>{{p.allergy}}</td>
            <td>{{p.p_email}}</td>
        </tr> 
    </table>

    
    </div>
  </div>

  <footer class="w3-container w3-theme-dark w3-padding-16 w3-center">
  <h2>Kérdés esetén keressen bennünket!</h2><br>
    <ul style="font-size: 1.5rem;list-style-type: none;">
      <li><b>Email:</b> info@mhis.com</li>
      <li><b>Telefonszám:</b> +36 90 / 989 898</li><br>
      <li>6722 Szeged, Gutenberg u. 11.</li>
      
    </ul>
</footer>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2';

export default ({
    name:"PatientTable",

    
    data(){
        return{
           patients:undefined,
           loggedInTaj:0
        }
    },
    components:{
        
    },
    async created(){
        await this.getPatients();
    },
    setup() {
        
    },
    methods:{
    
        
       
        
        async getPatients(){
            await axios.get(this.hostname + "/api/Patient/get-id/"+this.loggedInTaj)  
                     .then(response => {
                        this.patients = response.data;
                     })
                    .catch(error => {
                        if (error.response) {
                            Swal.fire(error.response.data);
                        }
                    });
        },
    }
})
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>