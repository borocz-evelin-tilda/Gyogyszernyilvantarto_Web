<template>
    
  <div class="container">
      <Layout title="AddDrug"></Layout>
      <p></p>
      <h2>Gyógyszerkészítmény Felvétele: </h2>
 <label>Gyógyszer Azonosítószám: </label>
    <input v-model="drug.drugID" ref="drugID" type="number" />
    <br />
    <label>Vény nélküli? (I: 0, N: 1)</label>
 <input v-model="drug.isNoPrescription" ref="isNoPrescription" type="text"  />
    <br />
    <input v-model="drug.ingredient" ref="ingredient" type="text" placeholder="Hatóanyagok" />
    <br />
    <input v-model="drug.medicinename" ref="medicinename" type="text" placeholder="Megnevezése" />
    <br />
    <input v-model="drug.disease" ref="disease" type="text" placeholder="Mire való?" />
    <br />
   
    <button class="btn btn-primary" v-on:click="save">Hozzáad</button>
   </div>
</template>

<script>
import Layout from './Layout.vue';
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
        Layout
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

<style scoped>
button,input{
    margin-top:10px;
}
button{
    background-color: darkgreen;
}
button:hover {
        border: solid #33ed71 1px;
        background: #1ed059;
        background-image: -webkit-linear-gradient(top, #1ed08c, #3df6a0);
        background-image: -moz-linear-gradient(top, #1ed06e, #3df67b);
        background-image: -ms-linear-gradient(top, #1ed045, #3df684);
        background-image: -o-linear-gradient(top, #1ed077, #3df6b8);
        background-image: -webkit-gradient(to bottom, #1ed053, #3df6a9);
        
        text-decoration: none;
    }
.container{
         max-width: 360px;
        color: darkgreen;}
</style>
