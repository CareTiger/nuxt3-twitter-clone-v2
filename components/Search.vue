<template>
    <div class="mt-4 mx-2">
        <div class="flex justify-center rounded-full mt-1"> <!-- TODO the search bar is not centering in the block-->
            <div class="flex flex-grow items-stretch justify-center focus-within:z-10">
            <input type="text" name="search" id="search" class="block w-full rounded-none rounded-l-md border border-slate-500 pl-10 focus:border-sky-500 focus:ring-sky-500 sm:text-sm" placeholder="">
            </div>
            <button type="button" class="-ml-px inline-flex items-center space-x-2 rounded-r-md border border-slate-500 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
            <span>Search</span>
            </button>
        </div>                 
    </div>
</template>
