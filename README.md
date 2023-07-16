# Rocket Academy Coding Bootcamp: World Clock

TODO: link to exercise page

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Countdown & World Clock Application

The Countdown & World Clock Application is a React-based application that provides two main features:

New Year Countdown: Displays a live countdown timer ticking down towards the next New Year. It shows the remaining days, hours, minutes, and seconds in a visually appealing format.

World Clock: Displays the current time in various time zones around the world.

## Implementation

Home Component
The Home component is the main component of the application. It encapsulates two primary functionalities:

New Year Countdown
World Clock

New Year Countdown
The countdown is implemented using React's useState, useEffect, and useRef hooks.

useState is used to manage the state of the countdown timer. It maintains an object with days, hours, minutes, and seconds as properties.

useEffect is used to create an interval that updates the countdown state every second.

useRef is used to store the interval ID, allowing it to be cleared when the component is unmounted to prevent memory leaks.

The countdown timer calculates the time left until the next New Year upon each update and sets these values in the state.

World Clock
The World Clock is implemented as a separate component which is then included in the Home component.

World Clock Component
The World Clock component is responsible for displaying the current time in various time zones around the world. The specific implementation details of World Clock are not shown in the provided code, but it would typically involve using JavaScript's Date object and possibly some external library to handle time zones.

Usage
The application can be used in any React application by importing the Home component and using it in the render method of another component or in the return statement of a functional component.
