import projectPic1 from "../assets/images/icons/file-person-fill.svg"
import projectPic2 from "../assets/images/icons/book-half.svg"
import projectPic3 from "../assets/images/icons/piggy-bank-fill.svg"
import projectPic4 from "../assets/images/icons/trophy-fill.svg"
import projectPic5 from "../assets/images/icons/hourglass-top.svg"
import projectPic6 from "../assets/images/icons/chat-text-fill.svg"
import projectPic7 from "../assets/images/icons/diagram-3-fill.svg"
import projectPic8 from "../assets/images/icons/cart-check-fill.svg"
import projectPic9 from "../assets/images/icons/calendar2-day-fill.svg"
import projectPic10 from "../assets/images/icons/cloud-sun-fill.svg"
import projectPic11 from "../assets/images/icons/cup-straw.svg"
import projectSS1 from "../assets/images/screenshots/babysitters-club-screenshot.png"
import projectSS2 from "../assets/images/screenshots/book-search-screenshot.png"
import projectSS3 from "../assets/images/screenshots/budget-tracker-screenshot.png"
import projectSS4 from "../assets/images/screenshots/workout-tracker-screenshot.png"
import projectSS4 from "../assets/images/screenshots/overworked-screenshot.png"
import projectSS6 from "../assets/images/screenshots/techblog-screenshot.png"
import projectSS7 from "../assets/images/screenshots/employee-tracker-screenshot.png"
import projectSS8 from "../assets/images/screenshots/e-commerce-screenshot.png"
import projectSS9 from "../assets/images/screenshots/work-day-scheduler-screenshot.png"
import projectSS10 from "../assets/images/screenshots/weather-dashboard-screenshot.png"
import projectSS11 from "../assets/images/screenshots/tipsy-tricks-screenshot.png"

export const projects = [
    {
        id: 1,  
        projectTitle: "Babysitters Club",
        projectDescription: "Solo Project as part of Coding Bootcamp. This application was pulled together in less than 2 weeks. A MERN application where people can review and rate babysitters in their area.",
        projectTools: "React, Mongo, Express, Node, Graphql, Twilio, PWA",
        projectRepo: "https://github.com/CatOrmerod/babysitters-club",
        projectURL: "https://babysittersclub.herokuapp.com/",
        projectScreenshot: projectSS1,
        projectPic: projectPic1,
        projectRole: "Sole Author",
    },
    {
        id: 2,  
        projectTitle: "Book Search",
        projectDescription: "A book search website backed by google books.",
        projectTools: "Express, Graphql, Node, Mongo",
        projectRepo: "https://github.com/CatOrmerod/book-search",
        projectURL: "https://book-search-co.herokuapp.com/",
        projectScreenshot: projectSS2,
        projectPic: projectPic2,
        projectRole: "Sole Author",
    },
    {
        id: 3,  
        projectTitle: "Budget Tracker",
        projectDescription: "A budget tracker that can be used both online and offline. If entries are recorded whilst offline, they will be populated as soon as user is online again.",
        projectTools: "Service Worker, IndexedDB, PWA, Webpack",
        projectRepo: "https://github.com/CatOrmerod/budget-tracker",
        projectURL: "https://budget-tracker-co.herokuapp.com/",
        projectScreenshot: projectSS3,
        projectPic: projectPic3,
        projectRole: "Sole Author",
    },
    {
        id: 4,  
        projectTitle: "Workout Tracker",
        projectDescription: "A workout tracker using MongoDB and Mongoose.",
        projectTools: "MongoDB, Mongoose, Express.js, Node.js, JavaScript, HTML, CSS, Heroku",
        projectRepo: "https://github.com/CatOrmerod/workout-tracker",
        projectURL: "https://workout-tracker-co.herokuapp.com/",
        projectScreenshot: projectSS4,
        projectPic: projectPic4,
        projectRole: "Sole Author",
    },
    {
        id: 5,  
        projectTitle: "Overworked",
        projectDescription: "An application that highlights the hour and cost implications to a workers year by working unpaid overtime on a regular basis.",
        projectTools: "Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Bcrypt, Objects2csv, Nodemailer, JavaScript, HTML, Bootstrap, CSS, Heroku",
        projectRepo: "https://github.com/CatOrmerod/unpaid-overtime-calc",
        projectURL: "https://the-right-to-switch-off.herokuapp.com/",
        projectScreenshot: projectSS5,
        projectPic: projectPic5,
        projectRole: "Group Project",
    },
    {
        id: 6, 
        projectTitle: "Tech Blog",
        projectDescription: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
        projectTools: "Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Bcrypt, JavaScript, HTML, CSS, Heroku",
        projectRepo: "https://github.com/CatOrmerod/tech-blog",
        projectURL: "https://tech-blog-ormerod.herokuapp.com/ ",
        projectScreenshot: projectSS6,
        projectPic: projectPic6,
        projectRole: "Sole Author",
    },
    {
        id: 7, 
        projectTitle: "Employee Tracker",
        projectDescription: "A command line application to manage a company's employees using node, inquirer, and MySQL",
        projectTools: "Node.js, Inquirer, Jest, mySQL",
        projectRepo: "https://github.com/CatOrmerod/employee-management-system",
        projectURL: "https://github.com/CatOrmerod/employee-management-system",
        projectScreenshot: projectSS7,
        projectPic: projectPic7,
        projectRole: "Sole Author",
    },
    {
        id: 8, 
        projectTitle: "E-Commerce",
        projectDescription: "Built the back end for an e-commerce site by modifying starter code. Configured a working Express.js API to use Sequelize to interact with a MySQL database.",
        projectTools: "Express.js, mySQL",
        projectRepo: "https://github.com/CatOrmerod/e-commerce",
        projectURL: "https://github.com/CatOrmerod/e-commerce",
        projectScreenshot: projectSS8,
        projectPic: projectPic8,
        projectRole: "Sole Author",
    },
    {
        id: 9,  
        projectTitle: "Workday Scheduler",
        projectDescription: "App to display the workday hours where user can save their appointments",
        projectTools: "HTML, CSS, JavaScript, Bootstrap, GoogleFonts",
        projectRepo: "https://github.com/CatOrmerod/work-day-scheduler",
        projectURL: "https://catormerod.github.io/work-day-scheduler/",
        projectScreenshot: projectSS9,
        projectPic: projectPic9,
        projectRole: "Sole Author",
    },
    {
        id: 10,  
        projectTitle: "Weather App",
        projectDescription: "Weather app that provides the weather for any location and features a geolocation on opening the page to show the weather in the users current location.",
        projectTools: "HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome",
        projectRepo: "https://github.com/CatOrmerod/weather-dashboard",
        projectURL: "https://catormerod.github.io/weather-dashboard/",
        projectScreenshot: projectSS10,
        projectPic: projectPic10,
        projectRole: "Sole Author",
    },
    {
        id: 11,
        projectTitle: "Tipsy Tricks",
        projectDescription: "A home bar assistant to take any entered ingredient and display cocktails that use that ingredient.  Further to this it takes the users current location and provides a list of Liquor Stores in a 5km radius in case they need more ingredients.",
        projectTools: "HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome",
        projectRepo: "https://github.com/RichardtHopkins/Cocktail-suggester",
        projectURL: "https://richardthopkins.github.io/Cocktail-suggester/",
        projectScreenshot: projectSS11,
        projectPic: projectPic11,
        projectRole: "Group Project",
    }
]