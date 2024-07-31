const config = require('../next.config')
export const homepages = [
  {
    id: 1,
    href: "/home-1",
    imgSrc: `${config.basePath}/assets/img/homeblue.png`,
    title: "Sidebar With Box",
  },
  {
    id: 2,
    href: "home-2",
    imgSrc: `${config.basePath}/assets/img/hometwolight.png`,
    title: "Regular Layout",
  },
  {
    id: 3,
    href: "home-3",
    imgSrc: `${config.basePath}/assets/img/homeonelight.png`,
    title: "Box Layout",
  },
];
