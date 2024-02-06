import Home from './pages/Home.vue';
import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {path:'/', name:'Home', component: Home},
    // { path: '/:pathMatch(.*)*',  name: 'Home', component: Home },
    {
        path: '/:catchAll(.*)',
        component: '../index.html', // Specify the path to your index.html file
      },
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
          return {
            selector: to.hash
          }
        }
      }
});

// router.beforeEach((to, from, next) => {
//     if (to.name =="ForgotPassword" || to.name == "Login" || to.name == "Signup" || to.name == "Callback" || to.name == "NewPassword"  ) {
//         if(sessionStorage.getItem("status") == 'active') {
//             router.push('/account')
//         } else {
//             next();
                
//         }
//     } else if (to.name =="Home" || to.path == "/career") {
//         next();
//     }
//      else  {
//         if(sessionStorage.getItem("status") == 'inactive' || !sessionStorage.getItem("status")) {
//             router.push('/login')
//         } else {
//             next();
                
//         }
//     }
//   });

// router.beforeEach( async (to, from, next) => {
//     if (to.path =="/users" || to.path =="/admin-dashboard" || to.name =="AdminListing" || to.path =="/editor" || to.path =="/discount" || to.path =="/create-category" || to.name =="OrderDetails" || to.path =="/admin-career" || to.name =="Job") {
//             try {
//               const res = await axiosInstance.get('V1/auth/getUser') 
//               console.log(res.data.message.role)
          
//               if(res.data.message.role === 'admin')  {
//                   next();
//               } 

//               else{
//                   router.push('/dashboard')

//               }
//             } catch (err) {
//               router.push('/login')
//               console.error(err)
//             }
//     } else {
//       next();
//     }
//   });

export default router;
