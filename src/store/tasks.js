import axios from "axios";
import router from "../router";

export default {
    state() {
        return {
            tasks: []
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks
        },
    },
    mutations: {
        updateTasks(state, data) {
            state.tasks = data
        }
    },
    actions: {
        CreateNewTask(context, params){
            axios.post(`https://test.ai-softdev.com/tasks/`, params, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).then(response => {
                context.dispatch('loadTasks', {
                    page:1,
                    limit:50,
                })
                router.push({
                    name:'tasks_page'
                })
            })
               
        },

        loadTasks({commit}, data) {
            axios.get(`https://test.ai-softdev.com/tasks/?page=${data.page}&limit=${data.limit}`, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).then(response => {
                commit('updateTasks', response.data.data)
                console.log(response.data.data)
                
            })
        },

        deleteTask({commit}, data) {
            axios.delete(`https://test.ai-softdev.com/tasks/${data.id}?page=${data.page}&limit=${data.limit}`, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).then(response=> {
                commit('updateTasks', response.data.data)
                console.log(response.data.data);
            })
        },
        doneTask(context, data) {
            axios.patch(`https://test.ai-softdev.com/tasks/done/${data.id}?page=${data.page}&limit=${data.limit}`, data,{
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).then(response=> {
                console.log(response.data.data);
            }).catch(error => {
                if (error.response && error.response.status === 401) {
                    console.error("Ошибка 401: Пользователь не авторизован");
                }
            })
        },
        getTaskByDate({commit}, data){
            axios.get(`https://test.ai-softdev.com/tasks/${data.date}?page=${data.page}&limit=${data.limit}`, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).then(response => {
                commit('updateTasks', response.data.data)
                console.log(response.data.data);
            })
        },
        updateTasksById(context, data) {
            axios.put(`https://test.ai-softdev.com/tasks/${data.id}?page=${data.page}&limit=${data.limit}`, data.params, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).then(response => {
                console.log(response.data.data);
                router.push({
                    name:'tasks_page'
                })
            }).catch(error => {
                if (error.response && error.response.status === 401) {
                    console.error("Ошибка 401: Пользователь не авторизован");
                }
            });
        }
        
    }
}



