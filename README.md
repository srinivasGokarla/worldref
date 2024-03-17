## Problem Statement

Implement a login feature and display cards on the home page. The cards should have a heading,
description, and two buttons - "Add to Deals" and "Check Details". Authenticated users should be able to
access these buttons, while non-authenticated users should be redirected to the login/register page. After
logging in or registering, users should be redirected back to the home page where they can access these
features.

## Deployed link
[link](https://worldref-kappa.vercel.app/)

## Installation or How to run the app
I created React Application. So, if you want to run our code then please read the instructions below :
- Clone our repository `https://github.com/srinivasGokarla/worldref`


- After installation, now run `npm start` and  you will see a new window will be opening in the default browser which is running on port `http://localhost:3000`



  # Instructions: 

1. The homepage displays a welcome message that includes Card Component.
2. Clicking on the login button on Navbar takes you to a login page where you must enter your email and password (which are obtained from the Local Storage) in the form provided.
3. IF You don't have an Account then just signUp the page with fill the email and password and after click the signUp button it will  store the data on local Storage and redirect to Login Page.
3. Upon form submission, you can access `Check Details`, `Add to Deals` and `Logout` buttons. Once you have the users data,  if exists, store the token in the `context API` and change the `isAuth` to true and you will then be navigated to the card page.
4. If the user logs out, clear the authentication status and redirect them to the login/register page.
5. If a non-authenticated user tries to access these buttons, display a message prompting them to login page


### Understanding Component Structure

- src
  - Components
    - Card
    - Home
    - Login
    - Navbar
    - Signup

  - Context
    - AuthContext
  - Routes
    - PrivateRoute
    - AllRoutes
  - App
  - index.js

### Features to build:

 - Create a login form that takes username and password as inputs.
 - Design a default home page component with a login feature
 - Create a card component that displays the card information, including a heading and description
 - "Add to Deals" button: This button should only be accessible to authenticated users. Implement a
 function that handles the click event for this button. "Check Details" button: This button should also only be accessible to authenticated users.
 Implement a function that handles the click event for this button



### AuthContextProvider

- In AuthContextProvider, you need to pass the `providerState` as a value to the `AuthContext.Provider`.
- This `providerState` object is provided in the boilerplate, you need to update this object with the following key-values.
  - `authState` - with the auth state of the user by default `{isAuth: false, token: null}`
  - `loginUser` - this should be a function that will update the auth state by taking a token as an argument. ex:`{isAuth: true}`
  - `logoutUser` - this should be a function that will update the auth state to the default state. `{isAuth: false, token: null}`
  - for example the `providerState` will be assigned an object that will look like `{authState:authState,loginUser:loginUser,logoutUser:logoutUser}`

1. Use the `providerState` as the value when you are passing in the context provider
2. Some of the boilerplate is provided. You are expected to write all the other remaining parts (functions, logic, importing createContext etc).do not remove those.
3. Make sure Context API is connected with your React application properly, and you have access to the Context API data.



**Functionalities component-wise**

## Routes

- ## AllRoutes
  - will contain all the routes in this component
  - `/` for `Home`
  - `/login` for `/login`
  - `/home` for `Home`
  - `/card` for `Card`
- ## PrivateRoute

  - `/card` protected route.

## App

- Add your `AllRoutes`, `Navbar` components here.


#### Cloud Deployment

- vercel 
used vercel for deploying reactjs(frontend)






# worldref
