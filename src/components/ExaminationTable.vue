<template>
    <Layout title="examinationTable"></Layout>
    <br />
  <p></p>
    <table class="basic-table">
        <thead>
            <tr>
                <th>Vizsgálat azonosító száma</th>
                <th>Betegség azonosító száma</th>
                <th>Vizsgálat dátuma</th>
                 <th>Felírt gyógyszer</th>
                <th>Diagnózis</th>
                 <th>Dózis</th>
                <th>Kezelési idő (napok száma)</th>
                <th>TAJ</th>
                <th>Doctor azonosítója</th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="e in examinations" :key="e.examinationID">
                <td>{{e.examinationID}}</td>
                <td>{{e.illnessID}}</td>
                <td>{{e.date}}</td>
                <td>{{e.medicine}}</td>
                <td>{{e.diagnosis}}</td>
                <td>{{e.dosage}}</td>
                <td>{{e.medication_time_interval}}</td>
                <td>{{e.taj}}</td>
                <td>{{e.doctorID}}</td>
               
            </tr>
           
            
               
        </tbody>
    </table>
</template>

<script>
import Layout from './Layout.vue';
import axios from 'axios';


export default ({
  
    data(){
        return{
           examinations:[]
        }
    },
    components:{
        Layout
    },
     async created(){
        await this.getExs();
    },
    setup() {
        
    },
    methods:{
      
        async getExs(){
            let loginID= localStorage.getItem('userID');
            await axios.get(this.hostname + "/api/Examination/get-taj/"+loginID)            
                     .then(response => {
                        this.examinations = response.data;
                     })
                 
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
     #loggedInTaj{
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
        border: solid #337FED 1px;
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