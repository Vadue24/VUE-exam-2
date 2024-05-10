import {createRouter, createWebHistory} from "vue-router";
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Main from '../pages/Main.vue'
import AddTask from '../tasks/AddTask.vue'
import Profile from "../pages/Profile.vue";
import Tasks from "../tasks/Tasks.vue";
import EditTask from "../tasks/EditTask.vue";


const routes = [
    {
        path: '/auth',
        children: [
            {
                path: '',
                component: Login,
                name: 'login_page'
            },
            {
                path: 'register',
                component: Register,
                name: "register_page"
            },
        ]
    },
    {
        path: '',
        component: Main,
        children: [
            {
                path: '',
                component: Tasks,
                name: "tasks_page",
           },
            {
                path: 'profile',
                component: Profile,
                name: 'profile_page'
            }
        ],
        name: 'main_page'
    },
    {
        path: '/addTask',
        component: AddTask,
        name: 'addTask_page'
    },
    {
        path: '/editTask',
        component: EditTask,
        name: 'editTask_page'
    }
]

export default createRouter({
    routes: routes,
    history: createWebHistory()
})

