# HIP HOP PIZZA AND WANGS [![Netlify Status](https://api.netlify.com/api/v1/badges/0a1d8099-ac63-4f29-84f0-c4f2225482e8/deploy-status)](https://app.netlify.com/sites/hiphoppizzaandwangspos/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

Do you like pizza? Do you like wings? Do you like Hip-Hop? Why have one when you can have all three! Hip Hop Pizza and Wangs is your one stop shop for it all! You have your pizza, you have your wings, but how do you pay for it all? No fear! Our point of sales system is here. 

[View App](#https://hiphoppizzaandwangspos.netlify.app/)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
First, clone this repo. Pick your favorite text editor. In your terminal, enter the following:

```
npm start
```
This will stand the live server. Authenticate with your email - pizza picking paradise awaits.

## About the User <!-- This is a scaled down user persona -->
- We were comissioned by the high lords of hip hop - the owners of HHPW - to create this application. Ideally, employees of this fine establishment authenticate through FireBase Oauth, and utilize this system to create/edit incoming orders, add items to said orders, close orders, and catch a peek at the current revenue of a set date range. Payment types and tips are all accounted for.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- A CRUD application featuring persistent storage within a FireBase DB. 
- Authenticated users can log in and CREATE orders.
- Authenticated users can READ created orders as well as items associated with them.
- Authenticated users can UPDATE orders. 
- Authenticated users (AUs) can DELETE orders as well as items associated with orders.
- AUs can choose from a list of pre-determined items on a menu to add to orders.
- AUs can see a revenue page that includes a summary of the following: total revenue, total tips, total call ins, total walk ins, as well as the number of each payment types.

## LOOMS OF HHPW<!-- A loom link is sufficient -->
*Click below to see HHP+WPOS in action!*
https://www.loom.com/share/829b90d831ea441ba2db6bea724af210

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](#https://hiphoppizzaandwangspos.netlify.app/)
- [Wireframes](#https://www.figma.com/file/4y3EZddALuBR3ouSEM57Np/MVP?node-id=0%3A1)
- [Project Board](#https://github.com/orgs/nss-evening-cohort-24/projects/9/views/1)
- [Check out our technical flow!](#https://user-images.githubusercontent.com/111099613/267167644-5f3dc7a1-576e-4323-9791-c46e2c5ece6c.png)
- [ERD? Sounds good to me!](#https://user-images.githubusercontent.com/97858910/266849569-ca8b3488-c77c-4248-9c43-0f2b08b2fef5.png)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
Look, ma, I can use array methods! - REDUCE
```
  const total = res.orderItems.reduce((acc, curr) => acc + curr.price, 0);
```


## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="auto" alt="Your Alt" src="your-link.png">

## Contributors
- [Shari Ebach](https://github.com/GitEbachS)
- [Ryan Shore](https://github.com/mshorecode)
- [Keana Cobarde](https://github.com/keanacobarde)
