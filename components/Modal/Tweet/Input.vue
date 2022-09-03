<template>
    <div class="flex items-center justify-center mx-3 mt-2">

        <div class="flex-shrink-0 hidden lg:block">
            <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </div>

        <div class="min-w-0 flex-1">

            <form action="#" class="relative">

                <div class="overflow-hidden rounded-lg border border-slate-300 shadow-sm focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500">
                    <label for="comment" class="sr-only">Add your comment</label>
                    <textarea rows="5" name="comment" id="comment" class="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm" placeholder="Add your comment..."></textarea>

                    <!-- Spacer element to match the height of the toolbar -->
                    <div class="py-2 bg-slate-600" aria-hidden="true">
                        <!-- Matches height of button in toolbar (1px border + 36px content height) -->
                        <div class="py-px">
                            <div class="h-9"></div>
                        </div>
                    </div>
                </div>

                <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2 bg-slate-600 rounded-lg">
                    <div class="flex items-center space-x-5">
                        <div class="flex items-center">
                            <button type="button" class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-slate-400 hover:text-slate-500">
                            <i class="material-icons-outlined"><span class="material-symbols-outlined">attach_file</span></i>
                            <span class="sr-only">Attach a file</span>
                            </button>
                        </div>            
                    </div>

                    <div class="flex-shrink-0">
                        <button type="submit" class="btn btn-primary">Post</button>
                    </div>
                </div>
            </form>

        </div>
    </div>

</template>