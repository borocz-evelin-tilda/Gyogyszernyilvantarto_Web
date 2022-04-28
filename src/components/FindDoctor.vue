<template>
    <Layout title="findDoctor"></Layout>
    <br />
   <p></p>
    <table class="basic-table">
        <thead>
            <tr>
                <th>Rendelő</th>
                <th>Orvos</th>
                <th>Email</th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="d in doctors" :key="d.doctorID=1">
                <td>{{d.office}}</td>
                <td>{{d.d_name}}</td>
                <td>{{d.d_email}}</td>
               
               
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
           doctors:[]
        }
    },
    components:{
        Layout
    },
     async created(){
        await this.getDocs();
    },
     setup() {
        
    },
    methods:{
         async getDocs(){
            await axios.get(this.hostname + "/api/Doctor/get-all/") //javít Not found
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
    
</style>