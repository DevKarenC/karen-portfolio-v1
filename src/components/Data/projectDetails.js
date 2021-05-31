import covidTrackerImage from '../../images/Projects/covid-tracker-demo-bar.gif';
import memoryCardGameImage from '../../images/Projects/spongebob-squarepants-memory-game-demo.gif';
import weatherAppImage from '../../images/Projects/weather-app-screenshot.png';
import tictactoeImage from '../../images/Projects/tic-tac-toe-demo.gif';
import unsplash100DaysOfCodeImage from '../../images/Projects/unsplash-100-days-of-code.jpg';
import javascript30Image from '../../images/Projects/JS3-social-share.png';

const projectDetails = [
  {
    name: 'US COVID-19 Tracker',
    src: covidTrackerImage,
    alt: 'Demo bar graph for the covid tracker',
    techStack: 'React, Chart.js, Node.js, Express, CSS, Heroku',
    features: [
      'Shows COVID-19 summary data and 3 different types of chart: bar, line, pie for all 50 states and US as a whole',
      'Uses the API from the Covid Tracking Project and US Census Bureau and Chart.js library for HTML5 based JavaScript charts',
      'Updates daily (Note: The Covid Tracking Project API is no longer collecting new data as of March 7, 2021, so this tracker will show data up until that date)',
    ],
    githubLink: 'https://github.com/DevKarenC/covid-tracker',
    demoLink: 'https://covid-tracker-web.herokuapp.com',
  },
  {
    name: 'SpongeBob SquarePants Memory Card Game',
    src: memoryCardGameImage,
    alt: 'Demo game play for the memory card game',
    techStack: 'React Hooks, Semantic UI, CSS',
    features: [
      'Uses React Hooks (useState and useEffect) with functional components',
      'Demonstrates the fundamentals of React including the components, states, and the props system',
      'Perfect for testing your memory and having fun!',
    ],
    githubLink: 'https://github.com/DevKarenC/react-memory-card-game',
    demoLink: 'https://devkarenc.github.io/react-memory-card-game/',
  },
  {
    name: 'Weather App',
    src: weatherAppImage,
    alt: 'Demo screenshot for the weather app',
    techStack: 'HTML, CSS, JavaScript, Webpack',
    features: [
      'Provides the current weather data (temperature, perceived temperature, humidity, wind speed) for the user specified city',
      'Utilizes the OpenWeather and Unsplash API for weather data and background image',
      'Improves user experience with helpful error messages, toggle unit system, and responsive design',
    ],
    githubLink: 'https://github.com/DevKarenC/weather-app',
    demoLink: 'https://github.com/DevKarenC/weather-app',
  },
  {
    name: 'Tic-tac-toe',
    src: tictactoeImage,
    alt: 'Demo gif for the tic tac toe game',
    techStack: 'HTML, CSS, JavaScript',
    features: [
      'Utilizes JavaScript module pattern, factory functions, private and public properties/methods, and immediately invoked function expression',
      "Displays helpful messages to improve game play, including the player's turn, taken grid, and the winner",
      'Allow players to enter names and maintain game integrity by preventing players from manipulating the board upon game over',
    ],
    githubLink: 'https://github.com/DevKarenC/tic-tac-toe',
    demoLink: 'https://devkarenc.github.io/tic-tac-toe/',
  },
  {
    name: '100 Days of Code Challenge',
    src: unsplash100DaysOfCodeImage,
    alt: 'Screenshot for completing the 100 days of code challenge',
    techStack: 'Markdown',
    features: [
      'Foster the habit of coding minimum of 1 hour daily by committing to the 100 days of code challenge',
      'Record the daily progress with a short summary of what I learned and struggled through to improve programming skills',
    ],
    githubLink: 'https://github.com/DevKarenC/100-days-of-code',
    demoLink: 'https://github.com/DevKarenC/100-days-of-code',
  },
  {
    name: 'JavaScript 30 Exercises',
    src: javascript30Image,
    alt: 'Screenshot for completing the JavaScript 30 exercises',
    techStack: 'HTML, CSS, JavaScript, Markdown',
    features: [
      "Complete the Wes Bos' JavaScript 30 exercises to improve the proficiency of using vanilla JavaScript",
      'Summarize the key concepts of each lesson in the Readme for future reference',
      'Thoroughly document the meaning of important lines of code for learning purposes',
    ],
    githubLink: 'https://github.com/DevKarenC/JavaScript30-with-notes',
    demoLink: 'https://github.com/DevKarenC/JavaScript30-with-notes',
  },
];

export default projectDetails;
