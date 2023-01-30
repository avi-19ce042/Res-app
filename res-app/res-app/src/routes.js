import LogIn from './components/Login.vue'
import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter,createWebHistory } from 'vue-router'
import AddRes from './components/AddRes.vue'
import UpdateRes from './components/UpdateRes.vue'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/login'
    },
    {
        name: 'AddRes',
        component: AddRes,
        path: '/add'
    },
    {
        name: 'UpdateRes',
        component: UpdateRes,
        path: '/update'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
