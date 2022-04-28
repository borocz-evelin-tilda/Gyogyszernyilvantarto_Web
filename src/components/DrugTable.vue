<template>
    <Layout title="DrugTable"></Layout>
    <br />
    <button v-on:click="addDrug" class="my-button" style="margin:10px 0 10px 0;">Gyógyszerkészítmény hozzáadása</button>
    
    <div class="clearfix">
    <br />
    <input v-model="loggedInDrug" id="loggedInDrug" ref="loggedInDrug" type="text" placeholder="Adja meg a keresett gyógyszer nevét: " />
    <br />
     <button v-on:click="getDrugs" class="my-button" style="margin:10px 0 10px 0;">Keresés</button>
     </div>
               
    <table class="basic-table">
        <thead>
            <tr>
                <th>Gyógyszer Azonosítószám</th>
                <th>Vény nélkül kapható-e (igen: 0, nem 1)</th>
                <th>Hatóanyagok</th>
                <th>Gyógyszerkészítmény neve</th>
                <th>Milyen betegségre/problémára való</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <!-- drug idk helyett neve? -->
            <tr v-for="d in drugs" :key="d.medicinename"> 
                <td>{{d.drugID}}</td>
                <td>{{d.isNoPrescreption}}</td>
                <td>{{d.ingredient}}</td>
                <td>{{d.medicinename}}</td>
                <td>{{d.disease}}</td>
                 <button v-on:click="deleteDrug(d.drugID)" class="my-button">Eltávolít</button>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Layout from './Layout.vue';
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
        Layout
    },
    async created(){
        await this.getDrugs();
    },
    setup() {
        
    },
    methods:{
       
        addDrug(){
            this.$router.push({name:"AddDrug", params: { id: 0}});
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
                    Swal.fire("Eltávolítva", response.data);
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

<style scoped>
.basic-table {
        width:100%;
        border: solid 1px #138326;
        border-collapse: collapse;
        border-spacing: 0;
        font: normal 13px Arial, sans-serif;
        margin-bottom: 4px;
    }
    .basic-table thead th {
        background-color: #2ac44b;
        border: solid 1px #DDEEEE;
        color: #336B6B;
        padding: 10px;
        text-align: left;
        text-shadow: 1px 1px 1px #fff;
    }
    .basic-table tbody td {
        border: solid 1px #1ac260;
        color: #333;
        padding: 10px;
        text-shadow: 1px 1px 1px #fff;
    }
     #loggedInDrug{
        background-color: lightgreen;
        color: darkgreen;
        font-weight: bolder; 
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
    }
    .my-button {
        background: #25ac25;
        background-image: -o-linear-gradient(top, #3df656, #1ed04a);
        background-image: -webkit-gradient(to bottom, #3df65c, #1ed062);
        border-radius: 20px;
        color: #FFFFFF;
        font-family: Arial;
        box-shadow: 1px 1px 20px 0 #000000;
        text-shadow: 1px 1px 20px #000000;
        border: solid #33ed9f 1px;
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
