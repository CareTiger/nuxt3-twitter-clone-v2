<template>
    <div class="relative z-10" role="dialog">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="transform overflow-hidden bg-transparent text-center transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">

                    <!-- Spinner -->
                    <div class="h-48 w-48">
                        <svg class="w-full h-full p-8  text-blue-400 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                            <circle class="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>