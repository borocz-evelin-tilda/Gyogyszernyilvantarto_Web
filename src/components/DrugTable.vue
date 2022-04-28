<template>
  <div class="drugTable">
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
        <p><b>Gyógyszerek</b></p>
      </div>
     <div class="w3-third w3-container"></div>
     </div>

     <div class="w3-row">
     <div class="w3-third w3-container"></div>
     <div class="w3-third w3-container" style="margin-top:1rem">
      <router-link to="/addDrug" >
      <button class="w3-button w3-green"  style="margin-bottom:1rem">Gyógyszerkészítmény hozzáadása</button>
      </router-link>



      <input v-model="loggedInDrug" id="loggedInDrug" ref="loggedInDrug" type="text" placeholder="Adja meg a keresett gyógyszer nevét "  class="w3-input w3-border w3-round w3-hover-pale-green"><br>
      <button class="w3-button w3-green" v-on:click="getDrugs" style="margin-bottom:1rem">Keresés</button>

      </div>
     </div>
     <table class="w3-table-all  w3-hoverable" style="margin-bottom: 8rem;" >
        <thead>
        <tr class="w3-green w3-theme-dark">
         
          <th>Vény nélkül kapható-e (igen: 0, nem: 1)</th>
          <th>Hatóanyagok</th>
          <th>Gyógyszer neve</th>
          <th>Milyen betegségre való</th>
          <th></th>
          
        </tr>
        </thead>

        <tr class="w3-hover-pale-green"  v-for="d in drugs" :key="d.isNoPrescreption">
            
            <td>{{d.isNoPrescreption}}</td>
            <td>{{d.ingredient}}</td>
            <td>{{d.medicinename}}</td>
            <td>{{d.disease}}</td>
            <button v-on:click="deleteDrug(d.drugID)" class="w3-button w3-green">Eltávolít</button>

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
           drugs:[],
           loggedInDrug:''
        }
    },
    components:{
        
    },
    async created(){
        await this.getDrugs();
    },
    setup() {
        
    },
    methods:{
       
        addDrug(){
            this.$router.push({name:"AddDrugView", params: { id: 0}});
        },
       
        async getDrugs(){
            await axios.get(this.hostname + "/api/Drug/get-name/"+this.loggedInDrug) 
                     .then(response => {
                        this.drugs = response.data;
                     })
                   
        },
        deleteDrug(drugID){
            axios.delete(this.hostname + "/api/Drug/delete/"+drugID)            
                .then(response => {
                    response.data
                    Swal.fire("Törlés sikeres");
                    var removeIndex = this.drugs.findIndex(x => x.drugID === drugID);
                    ~removeIndex && this.drugs.splice(removeIndex, 1);
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