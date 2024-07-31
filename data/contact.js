const config = require('../next.config')
export const contactItems = [
  {
    id: 1,
    iconSrc: `${config.basePath}/assets/img/icon/phone-call.png`,
    title: "phone ",
    content: ["+452 666 386", "+2565 562 226"],
    bgColor: "bg-prink",
  },
  {
    id: 2,
    iconSrc: `${config.basePath}/assets/img/icon/email-icon.png`,
    title: "email ",
    content: ["support@gmail.com", "example@gmail.com"],
    bgColor: "bg-catkrill",
  },
  {
    id: 3,
    iconSrc: `${config.basePath}/assets/img/icon/map-icon.png`,
    title: "address ",
    content: ["Maount View, Oval", "Road, New York, USA"],
    bgColor: "bg-prink",
  },
];
