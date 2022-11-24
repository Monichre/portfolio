import { User } from '@geist-ui/core';
import { Briefcase, Github, Linkedin, Twitter } from '@geist-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// import '../styles/Navbar.css';
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

const VerticalMenu = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  height: auto;
  right: auto;
  top: auto;
  z-index: 10;
  color: rgb(139, 148, 158);

  ul {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;

    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 0px auto;
      background-color: rgb(139, 148, 158);
    }

    li {
      color: #a8b2d1 !important;

      font-size: 20px !important;
      line-height: 1.3 !important;

      a {
        color: #a8b2d1 !important;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Liam = styled(User)`
  .avatar {
    width: 50px !important;
    height: 50px !important;
  }
  .names {
    .name {
      line-height: 2em !important;
      font-weight: 400 !important;
    }
    .social {
      font-weight: 500 !important;
    }
  }
`;

interface SideBarMenuProps {}

export const SideBarMenu: React.FC<SideBarMenuProps> = () => {
  return (
    <VerticalMenu>
      <ul className="social__StyledSocialList-anu6nt-0 dVLQAC fade-enter-done inherited-styles-for-exported-element">
        {social.map((item) => (
          <li>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <span>{item.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </VerticalMenu>
  );
};

const Navbar = () => {
  const router = useRouter();
  return (
    // <Flex classNameName={style.navbar} p={3}>
    //   <Box>
    //     <Liam src="/liam-1.jpeg" name="Liam Ellis">
    //       Coding, Crypto, UFOs
    //     </Liam>
    //   </Box>
    //   <Box ml="auto">
    //     <ul>
    //       <li classNameName={router.pathname == "/" ? `${style.active}` : ""}>
    //         <Link href="/" passHref>
    //           home
    //         </Link>
    //       </li>
    //       <li classNameName={router.pathname == "/bio" ? `${style.active}` : ""}>
    //         <Link href="/bio" passHref>
    //           bio
    //         </Link>
    //       </li>
    //       <li classNameName={router.pathname == "/work" ? `${style.active}` : ""}>
    //         <Link href="/work" passHref>
    //           work
    //         </Link>
    //       </li>
    //       <li classNameName={router.pathname == "/blog" ? `${style.active}` : ""}>
    //         <Link href="/blog" passHref>
    //           blog
    //         </Link>
    //       </li>
    //     </ul>
    //   </Box>
    // </Flex>
    <nav className="css_pro-edited-element-0 inherited-styles-for-exported-element">
      <div className="logo fade-enter-done">
        <a href="" aria-label="home">
          <img src={"/profile-pic.png"} />
        </a>
      </div>
      <div className="nav__StyledLinks-ghklvd-2 buZqzj">
        <ol>
          <li
            className="fadedown-enter-done"
            style={{ transitionDelay: "0ms" }}
          >
            <Link href="/" passHref>
              home
            </Link>
          </li>
          <li
            className="fadedown-enter-done"
            style={{ transitionDelay: "100ms" }}
          >
            <Link href="/bio" passHref>
              bio
            </Link>
          </li>
          <li
            className="fadedown-enter-done"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/work" passHref>
              work
            </Link>
          </li>
          <li
            className="fadedown-enter-done"
            style={{ transitionDelay: "300ms" }}
          >
            <Link href="/blog" passHref>
              blog
            </Link>
          </li>
        </ol>
        <div
          className="fadedown-enter-done"
          style={{ transitionDelay: "400ms" }}
        >
          <a
            className="resume-button"
            href="/resume-official.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="menu__StyledMenu-sdn9y6-0 dAwNpJ fade-enter-done">
        <div>
          <button
            aria-label="Menu"
            className="menu__StyledHamburgerButton-sdn9y6-1 eCxtrN"
          >
            <div className="ham-box">
              <div className="ham-box-inner"></div>
            </div>
          </button>
          <aside
            aria-hidden="true"
            tabindex="-1"
            className="menu__StyledSidebar-sdn9y6-2 dKogfI"
          >
            <nav>
              <ol>
                <li>
                  <a href="https://brittanychiang.com/#about">About</a>
                </li>
                <li>
                  <a href="https://brittanychiang.com/#jobs">Experience</a>
                </li>
                <li>
                  <a href="https://brittanychiang.com/#projects">Work</a>
                </li>
                <li>
                  <a href="https://brittanychiang.com/#contact">Contact</a>
                </li>
              </ol>
              <a
                href="https://brittanychiang.com/resume.pdf"
                className="resume-link"
              >
                Resume
              </a>
            </nav>
          </aside>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
