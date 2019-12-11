
## Car Insurance App
![alt text](https://github.com/ColinRosati1/friday-car-insurance/blob/master/screenCapture.JPG)


### Overview
Build a simple web app that allows a user to select their car from a directory of registered cars.
This data will be provided by the api server in this repo.
The api provides a list of available makes, models of each make and specific cars for each model with horsepower and engine capacity info.

### Task 
Populate mutliple Car API requests from server.
Agrigrate these API responses into redux store.
Display results in database feed component.
Select the users car from database.
Send the vehicle to query insurance options.


### Context
React, Redux, Flexbox, Jest, Enzyme 


### Proposed Solution
Create react app with one async component. This component lists all api results from redux store state.
Redux actions query api, seach api results. Components render different states based on store. 
Each API Call populates a select feild if there are new selection options returned from API.
Once all criteria are available list all vehicles. Select click on vehicle opens a modal to submit users vehicle. 
Submit user vehicle modal sends data to imaginary api endpoint to query insurance options.
Make SASS mobile first media query styles.
Write some basic unit tests for components.




### TODOS
Refactory the many ternary conditional rendering into local class methods for clarity.
Add integration testing with Redux, Store, connected components.
    I didnt get to this with time restraints. 
    since most of my components were connected components I need to write the integration tests.
    unit test would not work with shallow rendering.
Handle try catch API error, so doesnt log in console.
NPM run Build
    test build app speed


### Steps to Run

1. Clone this repository
2. cd friday-car-app
3. npm install
4. npm start
5. node /apiserver/server.js 
