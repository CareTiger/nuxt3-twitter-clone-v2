<template>
    <div>
        Home
    </div>
</template>

<script setup>
import { useUserStore } from '~~/store/user';
const userStore = useUserStore ();

if(userStore.user === null){
    navigateTo('/auth')
}

</script>