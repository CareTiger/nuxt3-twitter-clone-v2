import {defineStore} from 'pinia'

export const useAppStore = defineStore({
    id: 'app-store',
    state: () => {
        return {
            isLoading: false,
        }
    },
    actions: {},
    getters: {}
})