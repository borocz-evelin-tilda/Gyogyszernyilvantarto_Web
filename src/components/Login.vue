 <template>
    <div class="col-md-12">
        <div class="container">
            <h3 class="e-shop-font" id="title">Bejelentkezés</h3>
            <div class="card">
                <div class="card-body">
                    <div class="form-group">
                        <label for="un">Felhasználónév:</label>
                        <input v-model="user.username" ref="username" type="text" class="form-control" placeholder="Írja be a felhasználónevét..." name="un" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Jelszó:</label>
                        <input v-model="user.password" ref="psw" type="text" class="form-control" placeholder="Írja be a jelszavát..." name="password" />
                    </div>
                     <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember"> Emlékezz rám!
                        </label>
                    </div>
                    <div class="clearfix">
                        <button type="button" class="signin" v-on:click="login" >Bejelentkezés</button>
                      
                        <button type="button" class="signup" v-on:click="signup">Regisztráció</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
   name: "Login",

    data(){
        
        return{
            user:{
                username:'',
                password:''
            }
        }
    },
 
    methods:{
   
  
        signup(){
            this.$router.push({ name: 'Register' });
        },
       async login(){
         
       if(this.checkValidation()){
           let username=this.user.username;
           let password=this.user.password;
                await axios.get(this.hostname+'/api/User/signin/'+username+'/'+password) 
                     .then(response => {
                        localStorage.setItem('user', JSON.stringify(response.data));
                        localStorage.setItem('userID', JSON.stringify(response.data.taj));
                        if( response.data.taj>0){
                          console.warn(response.data)
                           
                              Swal.fire("Sikeres bejelentkezés!");
                             this.$router.push({name:"Nav"});
                         }
                         })
                   
                    .catch(error => {
                        if (error.response) {
                            Swal.fire(error.response.data, "Hiba!");
                            
                        }
                    });
        }
             },
        
        checkValidation(){
            if(!this.user.username){
                this.$refs.username.focus();
                Swal.fire("Adja meg a felhasználónevét!");
                return;
            }
            if(!this.user.password){
                this.$refs.psw.focus();
                Swal.fire("Adja meg a jelszavát!");
                return;
            }
            return true;
        },
      
		
	
   }
}
</script>

<style scoped>
#title{
    font-weight: bolder;
}
    .container{
        max-width: 360px;
        color: darkgreen;

    }
    button {
        background-color: lightgreen;
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
    .signin {
        padding: 14px 20px;
        background-color: darkgreen;
    }
    .signin, .signup {
        float: left;
        width: 50%;
    }
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }

</style>