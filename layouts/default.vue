<template>
    <div>

        <div v-if="appStore.isLoading">
            <ModalSpinner />
        </div>

        <Header />

        <div class=" bg-white dark:bg-slate-800">
            <div class="max-w-7xl mx-auto">
                <slot />
            </div>
        </div>

        <Footer />
        
    </div>
</template>

<script setup>
import { useAppStore } from '~~/store/app';
const appStore = useAppStore();

</script>