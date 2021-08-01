/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Arpit Agrawal",
  title: "Hi all, I'm Arpit",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1OZI3XFEmoVus7Xpvyn996l6kJdQNe5eHOsAKplod_TU/edit?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arpit9667",
  linkedin: "https://www.linkedin.com/in/arpit-agrawal-9a2277146/",
  gmail: "arpitagrawal312@gmail.com",
  facebook: "https://www.facebook.com/arpit.agrawal.73744801",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly scalable servers for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MySql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The LNM Institute Of Information Technology",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2017 - June 2021",
      desc: "Awarded 4 Merit scholarships for excellence academic performance.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Codeyoung",
      companylogo: require("./assets/images/codeyoung.png"),
      date: "August 2020 – Present",
      desc: "Codeyoung is a seed-funded edtech startup that provides live coding classes for kids.",
      descBullets: [
        "Worked on Razorpay integration for accepting payments via payment links and subscriptions.", 
        "Integrated LeadSquared CRM with the applications to automate lead management and analytics." ,
        "Wrote migrations and unit test cases to improve the deployment process on DigitalOcean." 
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "Aadat",
      companylogo: require("./assets/images/aadat.png"),
      date: "April 2020 – June 2020",
      desc: "Aadat is a bootstrap startup which specializes in developing services to track and analyze user exercise data.",
      descBullets: [
        "Worked on google authentication flow and google-fit api to track user daily steps and fitness data",
        "Integrated a Whatsapp bot for sending reminders to the users.", 
        "Learned the basics of DevOps technologies like docker to simplify the application development process." 
 
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "GSSoC mentor",
      subtitle:
        "Mentor @ Awesome-react-modules",
      image: require("./assets/images/gssoc.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1Y6nrLcvd0IhlcPSv2uZ50_ZN1H2ItSqr/view?usp=sharing"
        },
      ]
    },

    {
      title: "Coursera Certification for Python",
      subtitle: "Completed Certifcation from University of Michigan for Python",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/YRQHDSJHN7PP"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9079950014",
  email_address: "arpitagrawal312@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "arpit9667", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
