<template>
    <div class="min-h-screen grid grid-cols-1 lg:grid-cols-12 text-slate-700 dark:text-white">
        <div class="hidden lg:block lg:col-start-1 lg:col-span-2">Left Sidebar</div>
        <div class="col-start-1 col-span-12 lg:col-start-3 lg:col-span-7 w-full">
            <Tweet/>
        </div>
        <div class="hidden lg:block lg:col-start-10 col-span-3">Right Sidebar</div>
    </div>
</template>

<script setup>
import { useUserStore } from '~~/store/user';
const userStore = useUserStore ();

if(userStore.user === null){
    navigateTo('/auth')
}

</script>