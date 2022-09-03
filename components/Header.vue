<template>
    <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div class="w-full grid grid-cols-12 py-6">
            <div class="col-start-1 col-span-2 flex items-center justify-center">
                <nuxt-link class="text-slate-800 dark:text-white text-2xl" to="/">Clone</nuxt-link>
            </div>

            <div class="col-start-7 col-span-6 lg:col-start-10 lg:col-span-3">
                <div class="flex flex-row items-center justify-end space-x-4" v-if="!userStore.user">
                    <nuxt-link to="/auth" class="btn btn-primary">Sign in</nuxt-link>
                    <nuxt-link to="/auth" class="btn btn-secondary">Sign up</nuxt-link>
                </div>
                <div class="flex flex-row items-center justify-end" v-else>
                    <button class="btn btn-primary">Post a question</button>
                </div>
            </div>
        </div>
    </nav>
    </header>
</template>
<script setup>
import { useUserStore } from '~~/store/user';
const userStore = useUserStore();

</script>