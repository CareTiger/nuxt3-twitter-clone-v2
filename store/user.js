import {defineStore} from 'pinia'

export const useUserStore = defineStore({
    id: 'user-store',
    state: () => {
        return {
            user: null
            // user : {email:"ven@gmail.com"}
        }
    },
    actions: {
        handleLogin(user) {
            this.user = user;
        },

        handleSignup(user) {
            this.user = user;
        }
    },
    getters: {}
})