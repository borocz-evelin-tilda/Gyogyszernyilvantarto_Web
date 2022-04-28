<template>
    <Layout title="PatientTable"></Layout>
    <p></p>
    <table class="basic-table">
        <thead>
            <tr>
                <th>TAJ</th>
                <th>Felhasználónév</th>
                <th>Név</th>
                 <th>Lakcím</th>
                <th>Szülidő</th>
                 <th>Szülhely</th>
                <th>Allergia</th>
                <th>Jelszó</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in patients" v-bind:key="p.taj">
                <td>{{p.taj}}</td>
                <td>{{p.username}}</td>
                <td>{{p.p_name}}</td>
                <td>{{p.p_address}}</td>
                <td>{{p.p_birthday}}</td>
                <td>{{p.p_birthplace}}</td>
                <td>{{p.allergy}}</td>
                <td>{{p.p_password}}</td>
                <td>{{p.p_email}}</td>
                
                
                
            </tr>
        </tbody>
    </table>
</template>

<script>
import Layout from './Layout.vue';
import axios from 'axios'
import Swal from 'sweetalert2';

export default ({
    name:"PatientTable",

    
    data(){
        return{
           patients:undefined,
        }
    },
    components:{
        Layout
    },
    async created(){
        await this.getPatients();
    },
    setup() {
        
    },
    methods:{
        async getPatients(){
           let loginID= localStorage.getItem('userID');
            await axios.get(this.hostname + "/api/Patient/get-id/"+loginID)  
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
