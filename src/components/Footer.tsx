import { Briefcase, Github, Linkedin, Twitter } from "@geist-ui/icons";

import style from "../styles/Footer.module.css";

export const social = [
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/heyitsliam/",
    tooltip: `Check me out on linkedin.`,
    download: false,
  },
  {
    icon: <Github />,
    url: "https://github.com/Monichre",
    tooltip: `Check me out on Github.`,
    download: false,
  },
  {
    icon: <Twitter />,
    url: "https://twitter.com/monichre",
    tooltip: `Check me out on twitter`,
    download: false,
  },

  {
    icon: <Briefcase />,
    url: "/resume.pdf",
    tooltip: `Download my resume resume.`,
    download: true,
  },
];

const Footer = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.getHours() + ":" + current.getMinutes();
  return (
    <div className={style.footer}>
      <div>
        {social.map((item) => (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <span>{item.icon}</span>
          </a>
        ))}
      </div>
      <div>{time + " | " + date}</div>
    </div>
  );
};

export default Footer;
