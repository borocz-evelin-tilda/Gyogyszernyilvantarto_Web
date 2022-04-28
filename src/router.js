import { createRouter,createWebHistory} from 'vue-router'
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"
import Home from "./views/Home.vue"


// lazy-loaded
const PatientTable = () => import("./components/PatientTable.vue")
const ExaminationTable = () => import("./components/ExaminationTable.vue")
const FindDoctor = () => import("./components/FindDoctor.vue")
const DrugTable = () => import("./components/DrugTable.vue")
const AddDrug = () => import("./components/AddDrug.vue")
const Nav = () => import("./components/Nav.vue")

const routes = [
    {
      path: "/login",
      alias: ['/login'],
      name:"Login",
      component: Login,
    },
    {
      path: "/",
      alias: ['/home'],
      name:"Home",
      component: Home,
    },
    {
      path: "/register",
      name:"Register",
      component: Register,
    },
  
    {
      path: "/patientTable",
      name: "PatientTable",
      component: PatientTable,
    },
    {
      path: "/nav",
      name: "Nav",
      component: Nav,
    },
    {
      path: "/examinationTable",
      name: "ExaminationTable",
      component: ExaminationTable,
    },
    {
      path: "/findDoctor",
      name: "FindDoctor",
      component: FindDoctor,
    },
    {
      path: "/drugTable",
      name: "DrugTable",
      component: DrugTable,
    },
    {
      path: "/addDrug/:id",
      name: "AddDrug",
      component: AddDrug,
      props: true
    }
   
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
      next('/home');
    } else {
      next();
    }
  });

  export default router;