# STEPS
## first run
- run npm run dev to make sure the initial creation of the project was fine

# FRONTEND SETUP
## Tailwind
- Install @nuxtjs/tailwindcss
- add module to nuxt.config
- npx tailwindcss init
- create tailwind.css in assets/css folder file and add the three lines
@tailwind base;
@tailwind components;
@tailwind utilities;
add tailwindcss config to nuxt config (https://github.com/CareTiger/nuxt3-ui-components/blob/main/nuxt.config.ts)
- TEST 

## UI
- create the following folders layouts, pages, components
- create a default layout and make sure index.vue from pages is loading
- create the following folders layouts, pages, components
- create a default layout and make sure index.vue from pages is loading
- TEST

# Color mode
- add @nuxtjs/color (npm install --save-dev @nuxtjs/color-mode) to enable color mode (https://color-mode.nuxtjs.org/)
- add it to nuxt config
- TEST

## UI
- import material icons and add the href to the meta in nuxt config
- create an error.vue in the root folder (https://tailwindui.com/components/marketing/feedback/404-pages)
- TEST
- create custom button classes by updating the tailwind.css
- create a simple navbar and footer components and add the components to the default layout
- TEST 

## Pinia 
- install @pinia/nuxt  (see documention here - https://pinia.vuejs.org/ssr/nuxt.html)
- add it to the nuxt config modules (npm run.  it might crash.  remove package-lock.json and node_modules folder following by npm install command)
- create a user and app state stores (https://github.com/CareTiger/nuxt3-pinia)
- app state - add isLoading and show a spinner modal . past examples -
    - https://github.com/CareTiger/OLD_sampyl/search?q=centerModal
    - 

## Registration and Login
- Create a simple email based registration/login page (without any password) - (https://tailwindui.com/components/application-ui/forms/sign-in-forms)
- add @tailwind/forms to the tailwind config
- update the pinia state and test the front end flow
- create middleware to test the user state and navigate appropriately

## set up the index page
- text area component to tweet - With avatar and actions - (https://tailwindui.com/components/application-ui/forms/textareas)
- create a data folder with dummy tweets
- display stream of tweets. use this card with avatar (https://tailwindui.com/components/application-ui/headings/page-headings)

# SERVER SETUP
## set up the api folder 
- create user registration/login post components (1:25 mark in this video https://www.youtube.com/watch?v=_cM4j9_LfQk)
- test them using postman

## Setting up Prisma
- npm i -D prisma
- npm i @prisma/client
- npx prisma init
(ignore) if you have existing data in the database then do - npx prisma db pull < --f (force option) >
- run npx prisma generate
- update the prism.schema with the code related to "referential integrity"
- create an index.js folder in '/server/db/' and import the prisma client (https://github.com/CareTiger/nuxt3-prisma-mongo-v2/blob/main/server/db/index.js)

## complete the login/register api
- simple login (dont do anything with the password) use this template - https://tailwindui.com/components/application-ui/forms/sign-in-forms
- use dicebear to generate an avatar using the croodles sprite and username as seed (https://avatars.dicebear.com/api/croodles/ven.svg) (https://avatars.dicebear.com/)


## tweet
- backend api and data models https://www.youtube.com/watch?v=_cM4j9_LfQk (2:56 mark)


# Cloudinary and image files


# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
