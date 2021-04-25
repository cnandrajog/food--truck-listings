# property-listing-service

## Tech Stack

- Language: [TypeScript](https://www.typescriptlang.org/)

## Prerequisites

- Install Node.js with [nvm](https://github.com/creationix/nvm).
- Use [node 12](https://nodejs.org/en/about/releases/) (current node LTS version).

## Setup ENV file
- Please make sure to set-up .env file.
- For the convenience .env file has been provided with the code. 

## 🚀 Quick start

- Run `npm install` to install all packages used in the project.
- Run `npm start` to start the api.

## Current state and improvements in the application

-  Currently , we are fetching the food truck listings from an external http service [Socrata](https://dev.socrata.com/foundry/data.sfgov.org/jjew-r69b) and displaying it.
-  For better performance of Socrata apis, app token has been included as headers in the api call as suggested [here](https://dev.socrata.com/docs/app-tokens.html).
-  The disadvantage of above approach is, the external api may be down or slow, and we don't have much control over it.  
-  Food truck data is not going to change very frequently , may be once a day.
-  We can have a crone job, say once a day, to save the data in our own database  and hit our own database instead of trying to fetch the data from a 3rd party api every-time. 
-  Caching will improve api performance and help with scalability.
-  There should be multiple serves in multiple availability zones which helps in scalability.
-  Servers should scale up and down during the peak hours.
-  Security is important in any application on front-end, api and database. For example adding authentication and authorization to the application is always important.
-  Adding a UI on top of the backend app will make the application more interactive and user-friendly.
-  We can also add various features in the application like:
    - User can save favorite. 
    - User can search, filter, sort for their food trucks. 
    - User can give reviews, ratings.
    - User can view the menu, pricing and ordering online.
    - User can see the distance for the food truck from his current location and can see the food trucks on a map. 
    - User should be able to get different type of notifications.
    - Business owner can add locations of the food trucks for each day.
    - Business owner can see the transaction history.         
    - Business owner can edit menu, add special offers, see their most popular food.
    - Business owner can see and manage all their food trucks under one profile, if they have multiple food trucks.
    - Both business and users should be able to create a profile.
    - Both business owner and user should be able to upload photographs of the food truck, their food and seating area outside.
