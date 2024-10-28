
import Meme from "./../assets/portfolioImages/meme.jpg";
import LinkedIn from "./../assets/portfolioImages/linkedin.jpg";
import EasyBank from "./../assets/portfolioImages/banking.jpg";
import Youtube from "./../assets/portfolioImages/youtube.jpg";
import Quiz from "./../assets/portfolioImages/quiz.jpg"
import Vanlife from "./../assets/portfolioImages/vanlife.png"
import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "vanlife",
    img: Vanlife,
    name: "Project Van Life",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://project-van-life.vercel.app/",
    source: "https://github.com/rimshub/project-van-life",
    description:
      "SPA (Single Page Application) to rent a van for a road trip with 10+ routes. I have built it with ReactJS, React Router 6, miragejs and CSS for styling. It has a responsive design and navigation.",
  },
  {
    id: "meme",
    img: Meme,
    name: "Meme Generator",
    stack: ["< RESTful API />", "< React.js />"],
    live: "https://meme-generator-nu-liart.vercel.app/",
    source: "https://github.com/anita-ebube/meme-generator",
    description:
      "A cross-platform app that connects local service providers with customers. As a full stack developer, I contributed to the development of the app using Flutter, Node.js, Express.js, Next.js and MongoDB. I also worked on the design of the app using Figma. The mobile app is currently in the testing phase and will be launched soon. Web app's frontend is also completed.",
  },
  {
    id: "linkedin",
    img: LinkedIn,
    name: "LinkedIn Clone",
    stack: ["< RESTful API />", "< Tailwind CSS />", "< React.js />"],
    live: "https://linkedin-clone-psi-henna.vercel.app/",
    source: "https://github.com/anita-ebube/linedin-clone",
    description:
      "Responsive website which integrates with the REST Countries API to pull country data. You can view the list of all countries and find one via search or by filtering regions. Individual country page, enables you to see further details about the country like border countries. Mobile first workflow and Bootstrap v5 is used to make it responsive.",
  },

  {
    id: "digital Banking",
    img: EasyBank,
    name: "Easy Banking",
    stack: ["< React.js />", "< CSS3 />"],
    live: "https://easybank-cyan-psi.vercel.app/",
    source: "https://github.com/anita-ebube/Easybank",
    description:
      "Multi-page space tourism website provides relevent information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used React.js to build the website and CSS3 for styling.",

  },

  {
    id: "Youtube",
    img: Youtube,
    name: "Youtube Clone",
    stack: ["< React.js />", "< Tailwind CSS />", "< RESTful API />"],
    live: "https://youtube-clone-nine-pi.vercel.app/",
    source: "https://github.com/anita-ebube/youtube-clone",
    description:
      "This advice generator app using the Advice Slip API. A small and fun app to practice JavaScript and mobile first workflow and CSS3. It has a responsive design and navigation.",
  },

  {
    id: "Quiz",
    img: Quiz,
    name: "Quiz Generator App",
    stack: ["< React.js />", "< Tailwind CSS />", "< RESTful API />"],
    live: "https://quiz-omega-sage-95.vercel.app/",
    source: "https://github.com/anita-ebube/Quiz",
    description:
      "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge. As a front-end developer, I was able to practice my React.js and CSS3 skills in this project.",
  },

];

const InprogressProjectsData = [

  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:
      "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default { ProjectsData, InprogressProjectsData }