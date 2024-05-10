import axios from "axios";
import router from "../router";


export default {
    state() {
        return {
            user: {}
        }
    },
    mutations: {
        setUser(state, data) {
            state.user = data
        }
    },
    getters: {
        getCurrentUser(state) {
            return state.user
        }
    },
    actions: {
        register(commit, params) {
            axios.post('https://test.ai-softdev.com/auth/register', params)
                .then(response => {
                    params.email_confirm = true
                    console.log('response')
                    console.log(response.data)
                    commit('setUser', response.data.user)
                    localStorage.setItem('token', response.data.access_token)
                })
        },
        login({ commit }, params) {
            axios.post('https://test.ai-softdev.com/auth/login', params)
                .then(response => {
                    commit('setUser', response.data.data)
                    localStorage.setItem('token', response.data.access_token)
                    console.log('logged')
                    router.push({
                        name: "main_page"
                    })
                    console.log('logged')
                })
        },
        logoutUser({ commit }) {
            axios.post('https://test.ai-softdev.com/auth/logout', {
                headers: {
                    Authorization: `${localStorage.clear()}`
                }
            })
        },
        loadCurrentUser({ commit }) {

            axios.get('https://test.ai-softdev.com/auth/current-user', {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            }).then(res => {
                commit('setUser', res.data)
                console.log(res.data);
            }).catch(e => {
                if (e.response.status === 401) {
                    console.log('check')
                    localStorage.removeItem('token')
                    router.push({
                        name: 'login_page'
                    })
                }
            })

        },
        updateUsersData({ commit }, data) {
            const fd = new FormData()
            fd.append('avatar', data.avatar)
            axios.patch('https://test.ai-softdev.com/auth/user', fd,
                {
                    headers: {
                        Authorization: `${localStorage.getItem('token')}`
                    }
                }).then(response => {
                    console.log(response.data);
                })
            console.log(data);
        },
        updateUsersPassword({ commit }, data) {
            axios.post('https://test.ai-softdev.com/auth/change-password', data, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    console.log(response.data);
                    router.push({
                        name: "tasks_page"
                    })
                })
                .catch(error => {
                    console.error('Error in editing password:', error);
                });
        },
    },
}

