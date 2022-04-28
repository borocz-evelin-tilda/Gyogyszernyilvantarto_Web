 <template>
<div class="clearfix">
     <button type="button" v-on:click="pd">Személyes Adatok</button>
     <button type="button" v-on:click="ex">Vizsgálatai</button>
    <button type="button" v-on:click="med">Gyógyszerei</button>
     <button type="button" v-on:click="doc">Partner Rendelők</button>
     </div>      
</template>

<script>



export default {
    data(){
        return{
           
        }
    },
    
    methods:{
        pd(){
           this.$router.push({name: "PatientTable"});
        },
        ex(){
            this.$router.push({name: "ExaminationTable"});
        },
        med(){
            this.$router.push({name: "DrugTable"});
        },
        doc(){
            this.$router.push({name: "FindDoctor"});
        },
       
   }
}
</script>

<style scoped>
    .container{
        max-width: 360px;
    }
    button{
        background-color: green;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
    }
   
    button:hover {
        opacity:1;
    }
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
</style>