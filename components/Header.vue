<template>
    <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex w-full items-center justify-between py-6">
            <div class="flex items-center justify-center">
                <nuxt-link class="text-slate-800 dark:text-white text-2xl" to="/">Clone</nuxt-link>
            </div>

            <div class="hidden space-x-8 lg:block">
                <div class="mt-1 flex rounded-md shadow-sm">
                    <div class="relative flex flex-grow items-stretch focus-within:z-10">
                    <input type="text" name="search" id="search" class="block w-full rounded-none rounded-l-md border border-slate-500 pl-10 focus:border-sky-500 focus:ring-sky-500 sm:text-sm" placeholder="">
                    </div>
                    <button type="button" class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-slate-500 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
                    <span>Search</span>
                    </button>
                </div>                 
            </div>

            <div class="ml-10 space-x-4">
                <nuxt-link to="/auth" class="inline-block rounded-md border border-transparent bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">Sign in</nuxt-link>
                <nuxt-link to="/auth" class="inline-block rounded-md border border-transparent bg-gray-100 py-2 px-4 text-base font-medium text-sky-600 hover:bg-sky-50">Sign up</nuxt-link>
            </div>
        </div>
        <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
            <div class="mt-1 flex rounded-md shadow-sm">
                <div class="relative flex flex-grow items-stretch focus-within:z-10">
                    <input type="text" name="search" id="search" class="block w-full rounded-none rounded-l-md border border-slate-500 pl-10 focus:border-sky-500 focus:ring-sky-500 sm:text-sm" placeholder="">
                    </div>
                    <button type="button" class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-slate-500 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
                    <span>Search</span>
                    </button>
                </div>
        </div>
    </nav>
    </header>
</template>