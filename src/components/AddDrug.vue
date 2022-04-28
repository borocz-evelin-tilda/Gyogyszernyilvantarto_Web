<template>
<div class="addDrug">
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
        <p><b>Gyógyszer hozzáadása</b></p>
      </div>
     <div class="w3-third w3-container"></div>
     </div>

<div class="w3-row">
     <div class="w3-third w3-container"></div>
     <div class="w3-third w3-container" style="margin-top:1rem">
         <label>Gyógyszer azonosító</label>
      <input v-model="drug.drugID" ref="drugID" type="number" class="w3-input w3-border w3-round w3-hover-pale-green" placeholder="Gyógyszer Azonosítószám"><br>

      <label>Vény nélkül kapható-e</label>
      <input v-model="drug.isNoPrescription" ref="isNoPrescription" type="text" placeholder="igen: 0, nem: 1" class="w3-input w3-border w3-round w3-hover-pale-green"><br>

      <label>Hatóanyagok</label>
      <input v-model="drug.ingredient" ref="ingredient" type="text" placeholder="Hatóanyagok" class="w3-input w3-border w3-round w3-hover-pale-green"><br>

      <label>Gyógyszer neve</label>
      <input v-model="drug.medicinename" ref="medicinename" type="text" placeholder="Gyógyszer neve" class="w3-input w3-border w3-round w3-hover-pale-green"><br>
      <label>Milyen betegségre való?</label>
      <input v-model="drug.disease" ref="disease" type="text" placeholder="Milyen betegségre való?" class="w3-input w3-border w3-round w3-hover-pale-green"><br>

      <button class="w3-button w3-green" v-on:click="save" style="margin-bottom:1rem">Hozzáad</button>
      </div>
     </div>
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
           drug:{
               drugID:0,
                isNoPrescreption:true,
               ingredient:'',
               medicinename:'',
               disease:''
           }
        }
    },
    components:{
        
    },
    async created(){
        if(this.$route.params.id > 0) await this.getDrug();
    },
    setup() {
        
    },
    methods:{
        
        async getDrug(){
            var drugID = this.$route.params.drugID;
            await axios.get(this.hostname + "/api/Drug/get-id/"+drugID) 
                     .then(response => {
                         console.log(response.data);
                        this.drug = response.data;

                     })
                    .catch(error => {
                        if (error.response) {
                            Swal.fire(error.response.data);
                        }
                    });
        },
       

        save(){
          
            
          if(this.checkValidation()){
             axios
                .post(this.hostname + "/api/Drug/post", {
                     drugID:this.drug.drugID,
                    isNoPrescreption:this.drug.isNoPrescreption,
                    ingredient:this.drug.ingredient,
                    medicinename:this.drug.medicinename,
                    disease:this.drug.disease,
                    
                })
                .then((response) => {
                    if (response.data.drugID > 0) {
                        Swal.fire("Sikeres művelet!")
                        this.$router.push({name:"DrugTable"});
                    console.log(response);
                   }
                    else{
                        Swal.fire("Valami hiba van.");
                    }
                })
                .catch(error => {
                    if (error.response) {
                        Swal.fire(error.response.data);
                    }
                });
              
          }
        },
        
        checkValidation(){
            if(!this.drug.drugID){
                this.$refs.drugID.focus();
                Swal.fire("Kitöltendő mező!");
                return;
            }
            if(!this.drug.isNoPrescreption){
                this.$refs.isNoPrescreption.focus();
                Swal.fire("Kitöltendő mező!");
                return;
            }
            if(!this.drug.ingredient){
                this.$refs.ingredient.focus();
                 Swal.fire("Kitöltendő mező!");
                return;
            }
            if(!this.drug.medicinename){
                this.$refs.medicinename.focus();
                 Swal.fire("Kitöltendő mező!");
                return;
            }
            if(!this.drug.disease){
                this.$refs.disease.focus();
               Swal.fire("Kitöltendő mező!");
                return;
            }
            return true;
        },
    }
})
</script>

<style>

</style>