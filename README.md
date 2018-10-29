# `README`


- [SmartKitchen Live](https://smart-kitchen1.herokuapp.com/)
- `This README documents the steps necessary to get the
application up and running.`
- `Welcome to SmartKitchen. SmartKitchen is a clone of StackOverflow that uses text from 14th Century Italian Epic Poet Dante Alighieri's Divine Comedy as sample data.`


## `Setup`

- `git clone the repo with the url:` https://github.com/parisDreyer/SmartKitchen
- `npm install` -install backend dependencies
- `npm run frontend-install` -install frontend dependencies
- `npm run dev` -start the project running on local host 3000 and 5000
  - `3000` is the port that the project UI runs on

The project should then be available at the address `localhost:3000` in your browser


## `Dependencies`

* `NodeJS`, and `ExpressJS`, `CreateReact` installed on your machine

* The frontend is compiled with `webpack` through Facebooks `CreateReact that generates a `dist/bundle.js` file which is the compiled version of the project
  - Don't worry about the webpack details
* Frontend UI are handled with `React`


## `Functionality`

* Has a Splash page welcoming users to the site

- ![Splash Page](/splash_page.png?raw=true "Splash Page")

* Users can `Search` for `recipes` by `ingredients`. Users can search by `voice` using webkit's speech-to-text api or by text on the search page
  - ![Search Recipes Form](/search_page.png?raw=true "Search Recipes Form")

* Search results are rendered in the recipe index page where the user can select a recipe that they want to view.
  - ![Search Index page](/index_page.png?raw=true "Search Index Page")

* Search result persists between page reloads

* Recipe Results either have a link to an external site that discusses the recipe, or a link to a recipe show page on the SmartKitchen site that displays the recipe


