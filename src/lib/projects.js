import projectPic1 from "../assets/images/icons/hourglass-top.svg"
import projectPic2 from "../assets/images/icons/chat-text-fill.svg"
import projectPic3 from "../assets/images/icons/diagram-3-fill.svg"
import projectPic4 from "../assets/images/icons/cart-check-fill.svg"
import projectPic5 from "../assets/images/icons/calendar2-day-fill.svg"
import projectPic6 from "../assets/images/icons/cloud-sun-fill.svg"
import projectPic7 from "../assets/images/icons/key-fill.svg"
import projectSS1 from "../assets/images/screenshots/overworked-screenshot.png"
import projectSS2 from "../assets/images/screenshots/techblog-screenshot.png"
import projectSS3 from "../assets/images/screenshots/employee-tracker-screenshot.png"
import projectSS4 from "../assets/images/screenshots/e-commerce-screenshot.png"
import projectSS5 from "../assets/images/screenshots/work-day-scheduler-screenshot.png"
import projectSS6 from "../assets/images/screenshots/weather-dashboard-screenshot.png"
import projectSS7 from "../assets/images/screenshots/tipsy-tricks-screenshot.png"

export const projects = [
    {
        id: 1,  
        projectTitle: "Overworked",
        projectDescription: "An application that highlights the hour and cost implications to a workers year by working unpaid overtime on a regular basis.",
        projectTools: "Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Bcrypt, Objects2csv, Nodemailer, JavaScript, HTML, Bootstrap, CSS, Heroku",
        projectRepo: "https://github.com/CatOrmerod/unpaid-overtime-calc",
        projectURL: "https://the-right-to-switch-off.herokuapp.com/",
        projectScreenshot: projectSS1,
        projectPic: projectPic1,
        projectRole: "Group Project",
    },
    {
        id: 2, 
        projectTitle: "Tech Blog",
        projectDescription: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
        projectTools: "Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Bcrypt, JavaScript, HTML, CSS, Heroku",
        projectRepo: "https://github.com/CatOrmerod/tech-blog",
        projectURL: "https://tech-blog-ormerod.herokuapp.com/ ",
        projectScreenshot: projectSS2,
        projectPic: projectPic2,
        projectRole: "Sole Author",
    },
    {
        id: 3, 
        projectTitle: "Employee Tracker",
        projectDescription: "A command line application to manage a company's employees using node, inquirer, and MySQL",
        projectTools: "Node.js, Inquirer, Jest, mySQL",
        projectRepo: "https://github.com/CatOrmerod/employee-management-system",
        projectURL: "https://github.com/CatOrmerod/employee-management-system",
        projectScreenshot: projectSS3,
        projectPic: projectPic3,
        projectRole: "Sole Author",
    },
    {
        id: 4, 
        projectTitle: "E-Commerce",
        projectDescription: "Built the back end for an e-commerce site by modifying starter code. Configured a working Express.js API to use Sequelize to interact with a MySQL database.",
        projectTools: "Express.js, mySQL",
        projectRepo: "https://github.com/CatOrmerod/e-commerce",
        projectURL: "https://github.com/CatOrmerod/e-commerce",
        projectScreenshot: projectSS4,
        projectPic: projectPic4,
        projectRole: "Sole Author",
    },
    {
        id: 5,  
        projectTitle: "Workday Scheduler",
        projectDescription: "App to display the workday hours where user can save their appointments",
        projectTools: "HTML, CSS, JavaScript, Bootstrap, GoogleFonts",
        projectRepo: "https://github.com/CatOrmerod/work-day-scheduler",
        projectURL: "https://catormerod.github.io/work-day-scheduler/",
        projectScreenshot: projectSS5,
        projectPic: projectPic5,
        projectRole: "Sole Author",
    },
    {
        id: 6,  
        projectTitle: "Weather App",
        projectDescription: "Weather app that provides the weather for any location and features a geolocation on opening the page to show the weather in the users current location.",
        projectTools: "HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome",
        projectRepo: "https://github.com/CatOrmerod/weather-dashboard",
        projectURL: "https://catormerod.github.io/weather-dashboard/",
        projectScreenshot: projectSS6,
        projectPic: projectPic6,
        projectRole: "Sole Author",
    },
    {
        id: 7,
        projectTitle: "Tipsy Tricks",
        projectDescription: "A home bar assistant to take any entered ingredient and display cocktails that use that ingredient.  Further to this it takes the users current location and provides a list of Liquor Stores in a 5km radius in case they need more ingredients.",
        projectTools: "HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome",
        projectRepo: "https://github.com/RichardtHopkins/Cocktail-suggester",
        projectURL: "https://richardthopkins.github.io/Cocktail-suggester/",
        projectScreenshot: projectSS7,
        projectPic: projectPic7,
        projectRole: "Group Project",
    }
]