# Project Proposal
## MERN Flex Project
### Amanda Mitchel, Nathasha Surendran, Chris Yip, Luke Dreyer


## `Background and Overview`  
- Users can ask for recipe sugestions based on a user ingredients list. The user chooses whether to search for recipes that either have or do not have a certain ingreient. Users can search for recipes with exclusively a certain set of ingredients.
- The purpose of this app is to show effective api usage of recipe look up to generate useful information for base. The primary feature of this app will be the user interface, which should be simple, engaging, and encouraging for users to interface with. For this reason Users will always see one main feature on the page that will take up the whole screen. 
- Users will additionally see an expandable menu that allows them to redirect to a sign-in page, an account settings page, a recipe index page, a recipe show page, and a recipe search page.


## `Functionality and MVP`  
- splash, get started
  - users can log in, sign up, or simply use the app without logging in
  - smooth bug free navigation
  -error rendering disappears upon successful sign-in / sign-out
- form / filters
  - has a search page where users can input search criteria
  - users can input search criteria such as "has natto" or "no pork" through text input on a form in the middle of the 'search page' or through voice command with the same diction on the 'search page'
  - redirects to the recipe index page upon successfully finding search results
- index results
  - displays a list of recipes that match a search criteria
  - only shows recipes that match the criteria. E.g. if the user says "no chicken", recipes that include chicken are not included in the search results index
  - users can dynamically modify the search criteria on the index page to adjust the recipe outpus
- results show
  - displays a recipe name with an image of the dish
  - the show result displays the ingredients list of a recipe
  - describes the steps to making the recipe
  - renders an error message if any information is missing
  - smooth bug-free navigation
  - users can save this recipe as a favorite recipe when logged in
## `Technologies and Technical Challenges`  
  - Food2ForkApi
  - developer.edamam.com/
  - Speech recognition with MIT's open source webkit wrapper react-component: https://www.npmjs.com/package/react-speech-recognition
    - only works in chrome browser. We are currently researching alternatives
## `Things Accomplished Over the Weekend`  
  - We researched the best food APIs to use and came up with good results. The Edamam api has 28 nutrients and 40 diets/allergies search criteria, over 40,000 full recipes, and over 700,000 foods. We additionally have setup a working configuration of MIT's speech recognition React Component.
  - We have secured api keys and develloper accounts for each of the APIs we are going to use.
  - We have each gone through the user-auth MERN stack tutorial so have 4 working verisions of the user-auth pattern for MERN.
## `Group Members and Work Breakdown`  
  - GROUP MEMBERS: Amanda Mitchel, Nathasha Surendan, Chris Yip, Luke Dreyer
  - Luke And Amanda will handle the frontend form data logic, and styling -- basically the ui and the front-to-back communication. 
  - Chris and Nathasha will handle the Backend communication to frontend and API calls to lookup recipe data.
  
## `Proposal must have a day-by-day breakdown for each individual. See sample proposal for clarification.` 
### Tuesday 
  - By Tuesday Morning, Luke Will have setup a recipe input form that submits data to the ajax calls for the recipe API.
  - Amanda will have developed the index page to render the search results
  - Chris will have Setup a selector that correctly packages the recipe search result into userful state-data for the frontend
  - Nathasha will write the ajax calls that handle the api request
  - Group review of project goals
### Wednesday
  - Chris And Nathasha will have set up the user Auth and Database hosting on the MONGODB cloudhost
  - Luke Will have set up the Recipe Show Page including styling
  - Amanda will have set up the actions and reducers for the recipe show page
  - Chris, Luke, Nathasha, and Amanda will ship to project to heroku by the end of the day
  - Group review of project goals
### Thursday
  - The team will have a detailed testing meeting to assess what has been done and what needs to be done to make a fully functional App. We will go over css styling features with a fine-toothed comb and distribute styling jobs to each group member so that each group member completes and refines the css styling for a given page
  - Group review of project goals
### Friday
  - Luke will make a user Show page that shows a users current session info
  - Chris will manage the user info from backend to frontend that shows all of the data for a given user when requested (e.g. User name, email, dietary restrictions, favorite recipes)
  - Nathasha will have built out the functionality for a favorite recipe selection that logged - in users can select
  - Amanda will research and setup additional fallback apis for food request that can be used in place of the main api.
    - Luke will aditionally generate a locally stored fallback database if both apis are down
  - Group review of project goals
### Monday
  - All Group members will have completed styling so that all screen sizes look good with the app.
  - Each Group member will focus on a screen-pixel-count range
  - Luke will have setup a fallback voice recognition api that can be used if the primary one is not working -- and ideally that can be used to serve up speech recognition on browsers other than the Chrome browser.





## Additional Information

---------------------------------------
Voice-Interactive
---------------------------------------
https://www.npmjs.com/package/react-speech-recognition


---------------------------------------
Food2ForkApi
---------------------------------------

The example i shared was with beans as an ingredient

https://www.food2fork.com/api/search?key=dd8e0337e1f7fc746f4d6f8bcd489dfb&q=shredded%20chicken
This is the API end point you can send a request to. And in the query string you append the ingredient names.
{"count": 3, "recipes": [{"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/87b43c", "title": "Thai shredded chicken &amp; runner bean salad", "source_url": "http://www.bbcgoodfood.com/recipes/559630/thai-shredded-chicken-and-runner-bean-salad", "recipe_id": "87b43c", "image_url": "http://static.food2fork.com/559630_MEDIUM5018.jpg", "social_rank": 64.53044169113727, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/986d09", "title": "Shredded chicken, green bean &amp; barley salad with paprika &amp; lemon", "source_url": "http://www.bbcgoodfood.com/recipes/11638/shredded-chicken-green-bean-and-barley-salad-with-", "recipe_id": "986d09", "image_url": "http://static.food2fork.com/11638_MEDIUM68b8.jpg", "social_rank": 35.13912494162923, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "Tasty Kitchen", "f2f_url": "http://food2fork.com/view/07dc21", "title": "Shredded Pork and Black Bean Soft Tacos", "source_url": "http://tastykitchen.com/recipes/main-courses/shredded-pork-and-black-bean-soft-tacos/", "recipe_id": "07dc21", "image_url": "http://static.food2fork.com/taco011410x3073db5.jpg", "social_rank": 34.80777735743579, "publisher_url": "http://tastykitchen.com"}]}


It gives us a f2f url(food 2 fork) and also a source url which will take both to the recipe page.

_____________________________________________________


https://developer.edamam.com/
a post to
https://api.edamam.com/search
with the arguments
{
  q: natto,
  app_id: <your api id here>,
  app_key: <your api key here>
}
yields [the following result](''./sample_edamame_result.md'), with 3000 lines of recipe information.
