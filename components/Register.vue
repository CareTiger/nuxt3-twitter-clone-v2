<template>
    <!--
    // This example requires some changes to your config tailwind.config.js
    module.exports = {
        // ...
        plugins: [
        // ...
        require('@tailwindcss/forms'),
        ],
    }
    -->
    <div class="flex min-h-screen flex-col items-center justify-center -my-16 lg:-my-24 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome to Clone</h2>
            <p class="mt-2 text-sm dark:text-white text-center">Find answers to your most pressing professional questions</p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form class="space-y-6" @submit.prevent="() => (isSignUp ? handleSignup() : handleLogin())">
                <div>
                <label for="email" class="block text-sm font-medium text-slate-700">Email address</label>
                <div class="mt-1">
                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full appearance-none rounded-full border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" v-model="payload.email">
                </div>
                </div>

                <div>
                <label for="password" class="block text-sm font-medium text-slate-700">Password</label>
                <div class="mt-1">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full appearance-none rounded-full border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" v-model="payload.password">
                </div>
                </div>

                <div class="flex items-center justify-end">
                    <div class="text-sm">
                        <a href="#" class="font-medium text-slate-900 hover:text-sky-500">Forgot your password?</a>
                    </div>
                </div>

                <div>
                <button type="submit" class="flex w-full justify-center btn btn-primary">
                    <span v-if="isSignUp">Continue</span>
                    <span v-else>Login</span>
                </button>
                </div>
            </form>

            <!-- Social auth -->
            <div class="mt-6">
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-slate-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="bg-white px-2 text-slate-500">Or continue with</span>
                    </div>
                </div>

                <div class="mt-6 grid grid-cols-2 gap-3">
                <div>
                    <a href="#" class="inline-flex w-full justify-center rounded-full border border-slate-300 bg-white py-2 px-4 text-sm font-medium text-slate-500 shadow-sm hover:bg-slate-50">
                    <span class="sr-only">Sign in with Apple</span>
                    <svg class="h-5 w-5" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"/></svg>
                    </a>
                </div>

                <div>
                    <a href="#" class="inline-flex w-full justify-center rounded-full border border-slate-300 bg-white py-2 px-4 text-sm font-medium text-slate-500 shadow-sm hover:bg-slate-50">
                    <span class="sr-only">Sign in with Twitter</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>                    
                    </a>
                </div>
                </div>
            </div>

            <!-- Policy and login option -->
            <div>
                <div class=" my-8">
                    <div class=" inset-0 flex items-center">
                        <div class="w-full border-t border-slate-300"></div>
                    </div>
                </div>                
                <p class="mt-4 text-xs text-slate-400 text-center">
                    <span>By continuing you agree to Clone's</span>
                    <span class="text-slate-900"> <nuxt-link to="#"> Terms of service</nuxt-link></span>
                    <span> and acknowledge you've read our</span>
                    <span class="text-slate-900"><nuxt-link to="#"> Privacy Policy</nuxt-link></span>
                </p>
                <p class="mt-4 text-xs text-center">
                    <nuxt-link to="" class=" text-slate-900" @click="isSignUp = !isSignUp">
                        <span v-if="isSignUp">Already a member? Log in</span>
                        <span v-else>Create a new account</span>                        
                    </nuxt-link>
                </p>
            </div>


            </div>
        </div>
    </div>

</template>

<script setup>
import { useUserStore } from '~~/store/user';
const userStore = useUserStore();
const isSignUp = ref(false);
// const client = useSupabaseClient()
const payload = {
    email: null,
    password: null
}

const handleSignup = () => {
    /*
    const { user, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
    })
    console.log('user', user)
    console.log('error', error)
    if(user){
        // tell them to verify their email
    }
    if(error) {
        // tell them the error
    }
    */
    try {
        userStore.handleSignup(payload)
    } catch (error) {
        
    }    
    
}
const handleLogin = () => {
    /*
    const { user, error } = await client.auth.signIn({
        email: email.value,
        password: password.value,
    })
    console.log('user', user)
    console.log('error', error)
    */
    userStore.handleLogin(payload)
}
</script>