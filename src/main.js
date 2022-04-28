import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)
//app.config.globalProperties.hostname = "https://localhost:44312"
app.config.globalProperties.hostname = "https://localhost:5001"
//app.config.globalProperties.hostname = "https://localhost:5000"
//app.config.globalProperties.patientID=0;
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')