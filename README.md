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


### Nancy
- User sign-up/login(front-end)
- User profile editing/avatar uploading(full-stack)
- Join/leave groups on main and maps pages(front-end)
- Show number of people joined on group cards(front-end)
- Heroku deployment setups

### Ysabelle
- Maps Page
  - Render the map using user's location as center
  - Place the markers on the map
  - Info window to pop up when markers are clicked which shows information/image about the event
- Cards Page
  - order the events in ascending date order
  - radius and current city in the search bar
  - confirmation modal to ask the user if they are sure they want to leave the event
-Nav Bar
  - show current user's city
- My Groups
  - invite friends functionality

### Jeffrey



