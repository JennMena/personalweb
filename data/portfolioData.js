const config = require('../next.config')

export const portfolioData = [
  {
    id: 1,
    class: "isotop-item logo",
    bgClass: "bg-prink",
    imgSrc: `${config.basePath}/assets/img/work/hack1HothXI.jpg`,
    subtitle: "HOTH XI Hackathon by ACM at UCLA",
    title: "BruinBites & Books",
    target: "#portfolio-1",
    category: ["All"],
    project: "Website",
    languages: ["Dart", "SQL", "Firebase"],
    client: "HOTH XI",
    previewLink: "https://devpost.com/mena-mallerly/challenges",
    previewName: "devpost.com",
    desc: [
      `I participated in the HOTH XI hackathon organized by ACM at UCLA on March 3, 2024, in Los Angeles, CA. My team, consisting of four members, and I competed in this 12-hour, beginner-friendly event, where we developed an app called BruinBites & Books. This UCLA-centric application, created using Flutter, Dart, and Firebase, aimed to connect students for social dining and literary discussions. Despite facing challenges with mobile deployment, SDK downloads, and GitHub coordination, we successfully overcame these obstacles and enhanced our non-technical contributions and team collaboration skills. Our efforts were rewarded with the Best Mobile Application award and an $80 cash prize.`,
    ],
  },  
  {
    id: 2,
    class: "isotop-item design mockup",
    bgClass: "bg-catkrill",
    imgSrc: `${config.basePath}/assets/img/work/pennyPig.jpg`,
    subtitle: "Expense tracking web application",
    title: "PennyPig",
    target: "#portfolio-1",
    category: ["All"],
    project: "Web Application",
    languages: ["React", "Java Script", "Node.js", "MS SQL"],
    client: "CS 35L",
    previewLink: "#https://github.com/JennMena/CS35LProject",
    previewName: "www.github.com",
    desc: [
      `For my Computer Science 35L class, my group of four developed PennyPig, an expense tracking web application. PennyPig helps users manage their expenses and income, set budget goals, and visualize their progress with graphs. It features transaction history search, updates, and deletions. Users can categorize expenses, adjust budget goals, view spending progress, and export transaction history to an Excel file. The tech stack includes Express.js, Node.js, Microsoft SQL Database for the back-end, and React.js for the front-end.`,
    ],
  },
  {
    id: 3,
    class: "isotop-item logo mockup",
    bgClass: "bg-catkrill",
    imgSrc: `${config.basePath}/assets/img/work/StemquaWomen.jpg`,
    subtitle: "Kode With Klossy Coding Bootcamp",
    title: "STEMqua Women",
    target: "#portfolio-1",
    category: ["All"],
    project: "STEMqua Women",
    languages: ["HTML", "CSS", "JavaScript"],
    client: "KWK Bootcamp",
    previewLink: "#",
    previewName: "www.replit.com",
    desc: [
      `
In July 2022, I was selected as a scholar for the Kode With Klossy Coding Bootcamp, an intensive two-week online summer program dedicated to empowering young women and non-binary students to develop their coding skills and pursue their passions in a technology-driven world. During the bootcamp, I practiced HTML, CSS, and JavaScript for web development. As part of the program, I developed STEMqua Women, an interactive and informational website designed to inspire and educate girls about the women who have fought to improve women's lives and create opportunities for future generations over the last decades.`,
    ],
  },
  /*
  {
    id: 4,
    class: "isotop-item mockup",
    bgClass: "bg-prink",
    imgSrc: `${config.basePath}/assets/img/work/work-img-4.png`,
    subtitle: "Travel Landing , UX/UI",
    title: "Packaging Box",
    target: "#portfolio-1",
    category: ["Mockup"],
    project: "website",
    languages: ["Photoshop", "Figma"],
    client: "Envato",
    previewLink: "#",
    previewName: "www.envato.com",
    desc: [
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,

      ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,
    ],
  },*/
  /*
  {
    id: 6,
    class: "isotop-item mockup design",
    bgClass: "bg-catkrill", //"bg-prink"
    imgSrc: "/assets/img/work/work-img-6.png",
    subtitle: "Travel Landing , UX/UI",
    title: "Chul urina",
    target: "#portfolio-1",
    category: ["Mockup", "Graphic Design"],
    project: "website",
    languages: ["Photoshop", "Figma"],
    client: "Envato",
    previewLink: "#",
    previewName: "www.envato.com",
    desc: [
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,

      ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`,
    ],
  },*/
];

export const filterButtons = [
  {
    id: 1,

    text: "All",
  },
  
  /*
  {
    id: 2,
    text: "Mockup",
  },
  {
    id: 3,
    text: "Graphic Design",
  },
  {
    id: 4,
    text: "Logo",
  },*/
];
