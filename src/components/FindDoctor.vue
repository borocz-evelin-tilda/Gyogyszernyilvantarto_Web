<template>
  
  <div class="findDoctor">
   
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
        <p><b>Partner Rendelők</b></p>
      </div>
     <div class="w3-third w3-container"></div>
     </div><br>
    
    <table class="w3-table-all  w3-hoverable" style="margin-bottom: 8rem;" >
        <thead>
        <tr class="w3-green w3-theme-dark">
          <th>Rendelő</th>
          <th>Orvos</th>
          <th>Email</th>
          
        </tr>
        </thead>
        <tr class="w3-hover-pale-green"  v-for="d in doctors" :key="d.doctorID=1">
          <td>{{d.office}}</td>
          <td>{{d.d_name}}</td>
          <td>{{d.d_email}}</td>
          
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
import axios from 'axios';
import Swal from 'sweetalert2';

export default ({
   
    data(){
        return{
           doctors:[]
        }
    },
    components:{
        
    },
     async created(){
        await this.getDocs();
    },
     setup() {
        
    },
    methods:{
         async getDocs(){
            await axios.get(this.hostname + "/api/Doctor/get-all/")
                     .then(response => {
                        this.doctors = response.data;
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

</style>
