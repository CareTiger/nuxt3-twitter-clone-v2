<template>
    <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div class="w-full grid grid-cols-12 py-6">
            <div class="col-start-1 col-span-2 flex items-center justify-center">
                <nuxt-link class="text-slate-800 dark:text-white text-2xl" to="/">Clone</nuxt-link>
            </div>

            <div class="col-start-4 col-span-5 place-items-center hidden lg:block">
                <div class="flex justify-center rounded-full mt-1"> <!-- TODO the search bar is not centering in the block-->
                    <div class="flex flex-grow items-stretch justify-center focus-within:z-10">
                    <input type="text" name="search" id="search" class="block w-full rounded-none rounded-l-md border border-slate-500 pl-10 focus:border-sky-500 focus:ring-sky-500 sm:text-sm" placeholder="">
                    </div>
                    <button type="button" class="-ml-px inline-flex items-center space-x-2 rounded-r-md border border-slate-500 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
                    <span>Search</span>
                    </button>
                </div>                 
            </div>

            <div class="col-start-7 col-span-6 lg:col-start-10 lg:col-span-3">
                <div class="flex flex-row items-center justify-end space-x-4 ">
                    <nuxt-link to="/auth" class="btn btn-primary">Sign in</nuxt-link>
                    <nuxt-link to="/auth" class="btn btn-secondary">Sign up</nuxt-link>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
            <div class="mt-1 flex rounded-md shadow-sm w-full">
                <div class="relative flex flex-grow items-stretch focus-within:z-10">
                    <input type="text" name="search-mobile" id="search-mobile" class="block w-full rounded-none rounded-l-md border border-slate-500 pl-10 focus:border-sky-500 focus:ring-sky-500 sm:text-sm" placeholder="">
                    </div>
                    <button type="button" class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-slate-500 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
                    <span>Search</span>
                    </button>
                </div>
        </div>
    </nav>
    </header>
</template>