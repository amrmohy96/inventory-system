
let login = require('./components/auth/Login.vue').default;
let register = require('./components/auth/Register.vue').default;
let forget = require('./components/auth/ForgetPassword.vue').default;

// End Authentication
let home = require('./components/Home.vue').default;


export const routes = [
    {
        name:'/',
        path:'/',
        component:login
    },
    {
        name:'home',
        path:'/home',
        component:home
    },
    {
        name:'register',
        path:'/register',
        component:register
    },
    {
        name:'forget-password',
        path:'/forget',
        component:forget
    }
];
