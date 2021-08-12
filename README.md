# Concert-with-Friend

## Live App
https://concert-with-friends.herokuapp.com/

## Project Description

As the world is gradually recovering from the pandemic, more and more live concerts are finally coming back! Wanna go to your favourite artist's live show but don't have a buddy? We got you covered! Concert with Friends is a web application that helps you find new friends to go to a concert with. Find concerts nearby you on the map or filtered from a list and join its group to start meeting new people!

### Who is it for? 

People who love music/going to concerts and are looking for others to join them in this event.

### What will it do? (What "human activity" will it support?)

Allow users to browse local concerts and join others who are attending that event by joining their virtual group. Users will be able to view the group member’s contact info once joined to connect in real life! 

### What type of data will it store? 

- User's login credentials, i.e. username, password
- User's personal information, i.e. email, mobile, facebook/instagram contacts, avatar, joined groups
- Event group’s information, i.e. event, members

### What will users be able to do with this data?

Discover and join groups for a particular event and connect with other's that are going to that event.

### What is some additional functionality you can add/remove based on time constraints?

Additional functionalities we can add are Spotify integrations so users can link their playlist and connect with other's who share similar music taste as well as in app messaging.
Functionalities to remove based on time constriction will be email alerts and adding the event to the user's calendar.

## Project task requirements

### 3-5 minimal requirements (will definitely complete)

1. User login/sign up ✅
2. Pins on google maps showing Ticket-master events ✅
3. Groups that user’s can join based on events ✅
5. join/leave group ✅
6. Show number of people joined ✅

### 3-7 "standard" requirements (will most likely complete)

1. Profile editing + Avatar uploading ✅
2. Filter events by proximity ✅
3. Filter events by date ✅
4. Filter events by city ✅
5. Add to calendar ✅


### 2-3 stretch requirements (plan to complete at least 1!)

1. Spotify integration where users can display their playlist 🚫
2. In app messaging 🚫
3. Email integration: be able to send invite links to friends and alert users when people join their group ✅
4. Alert system and session timeout for user experience improvement ✅

## Task Breakdown

### Pick 2 of your minimal requirements and break each of them down into ~2-5 smaller tasks!

**User login/sign up**
- Webpage with login/signup form
- User authentication
- Database setup
- Backend endpoint for creating users

**Pins on google maps showing Ticket-master events** 

- Google api integration to render map and markers
- Pulling in events data that are within a month from ticketmaster 
- Displaying event details in markers
- Be able to change cities to render new map view & events


![ConcertWithFriends UI Sketches - page 1](https://user-images.githubusercontent.com/20137196/119717563-aff2f480-be23-11eb-8019-d0c779ffb7e8.jpeg)
![ConcertWithFriends UI Sketches - page 2](https://user-images.githubusercontent.com/20137196/119717618-c305c480-be23-11eb-8b5b-da8099e19d83.jpeg)
![ConcertWithFriends UI Sketches - page 3](https://user-images.githubusercontent.com/20137196/119717626-c600b500-be23-11eb-9f9c-61731502f1a9.jpeg)


## FIGMA hi-fidelity design file
https://www.figma.com/file/vgKphQ9Y0UD4Z9faVusc6B/cpsc-455-proj?node-id=0%3A1


## Technical Specifications

### HTML, CSS, and JS
HTML, CSS, and JS encompass all the code that is used throughout the project. Javascript and HTML are used in tandem with JSX to create the structure and functionality of the front-end components. The CSS is then used to style all of the components to fit correctly and look visually appealing.

### React & Redux
Our app is built upon using React, allowing us to easily break down our code structure into components. Redux is used to manage the state into one store throughout the entire app, making it possible to keep track of the logged in user throughout the app, while dispatching actions such as alerts and logging in and out.

### MongoDB
We used MongoDB to create a database that stores our collections of groups and users. To perform queries to the database through code, we used Mongoose as the ODM in the backend and were able to easily fetch information and update our records in the database for users/groups. The reason why we chose MongoDB is that it's a schema-less NoSQL database, making it simpler and more flexible for web app development and can be easily scaled and hosted on a cloud server(i.e. MongoDB Atlas). Whereas for SQL databases, it's more expensive to handle frequent writes since it enforces a structured data table though it might be a better option for storing a huge bulk of data.

### Node & Express
Node and Express were mainly used to build up our backend server. ExpressJS is a nodejs web framework that we used to write RESTful APIs to handle different HTTP requests from the client side. We adopted routings for users and groups to enforce a better RESTful API design. As mentioned above, Mongoose API was used inside of the our APIs to communicate with the MongoDB database. 

### Heroku
Heroku is the cloud hosting platform that we used to deploy our app online. To deploy the app in one [dyno](https://www.heroku.com/dynos), we used nodejs as the buildpack and refactored our code base to have a separate client folder to store the front-end code(React app) with the back-end code living inside of the server folder, and added scripts in the root `package.json` for Heroku to build our client code. We chose to use Heroku because it is easy to set up and supports integration with Github actions, which has improved the development productivity significantly.

## Above and Beyond Features 👀 

Where our project excels is in our intentional user-centric designs and features. In the following sections, we will outline the key features built for improving our user’s experience.

### Email System 📧 
To help users keep track of app activity, we have an `email system` that notifies users via email when a new person joins their event group. Our `email system` also allows users to send email invites to their friends directly inside the app. 

### Alert System 🚨 
Our `alert system` holds the global states for all the errors and messages on the client side. The messages will be rendered in either a component or in the window alert box, as a client-side error handling approach. This is to give users an idea about what’s going wrong in the background and guide them towards further actions.
 
### Session Timeout ⌛️
The `session timeout` is a feature built upon the user login functionality in order to enhance site security and minimize the exposure to session-based attacks. Our app will track users’ activity state(not data) regularly to check if they are still actively performing actions, and will log them out automatically when their current session expires(i.e. no action has been performed in a certain amount of time). Usually, a new action will refresh the current session, and the default expiry period has been set to 1 hour.

### Confirmation Modal ✅
The `confirmation modals` were created for when a user attempts to leave a group. This will help reduce unintentional actions.

### Inputs 🖊 
All our input fields have some sort of validation tied to it. Email/phone numbers have formatting validation and passwords have minimum length requirements(i.e. at least 8 characters and must contain numbers). 

### Map View 🗺 
For event searching, we provide users with two different options. They can either use our search feature on the `main page` or find events based on their current location on the `maps page`. Our search feature provides them multiple filtering options to help them find exactly what they are looking for whereas the map view allows an easier visual overview of events around them. Our `maps page` also has custom popups to match the theme of the rest of the app.

### Calendar Feature 📅 
The calendar feature is directly accessible on the `My Groups` page. This feature pre-fills all of the information and minimizes the effort needed to add a new event to a user’s calendar.


## Next Steps
We plan to add on extra features that was not implemented in our stretch goal such as linking Spotify account into the user's profile so that other users can see your playlist and type of music that you are into. This will help users to find their best-matched buddy based on music taste. Another feature is to add on the chat option so that users can talk in a chat room with other users who also signed up for that event.

## Contributions

### Ruonan
- User sign-in/sign-up/authentication using Passport.js (backend)
- built the search feature component (frontend), integrated it with ticketmaster API to support searching by different filters
- Designed and built custom markers on maps page
- Designed and built landing page
- Integrated "my groups" page with ticketmaster API and database 
- Email API setup (Email.js) 
- Sending emails to alert all users in a group of new members joining
- MongoDB setup on backend
- Designed database to support use cases
- Designed and styled app components with CSS


### Nancy
- Page routing
- Created the Navbar component
- User sign-up/login(front-end)
  - Created the sign-up/login forms
  - Established redux store to manage user and alert states
  - Set up reducers, helpers and action creators
- User profile editing/avatar uploading(full-stack)
  - Create the profile page
  - Implemented the profile editing end-to-end
  - Implemented the avartar uploading end-to-end
- Join/leave groups(front-end)
  - Implemented the user join/leave group with action dispatching on the main page
  - Implemented the user join/leave group with action dispatching on the maps page
- Show number of people joined on group cards(front-end)
- Heroku deployment setups
  - Refactored the code base for deployment
  - Set up continuous deployment through Github actions

### Ysabelle
- Maps Page
  - Render the map using user's location as center
  - Place the markers on the map
  - Info window to pop up when markers are clicked which shows information/image about the event
- Cards Page
  - order the events in ascending date order
  - radius and current city in the search bar
  - confirmation modal to ask the user if they are sure they want to leave the event
- Nav Bar
  - show current user's city
- My Groups
  - invite friends functionality

### Jeffrey
- "From" and "To" date filters on search bar
- Event cards on Home and MyGroups page
  - View Members modal that shows contact info of members in a group
  - Dropdown with "Add to Calendar", "Purchase Tickets", and "Leave Group"
- Endpoints and schemas for managing users and groups in the database
- Password validation on Sign-up page



