import { Box, Flex } from "rebass";

import Link from "next/link";
import { User } from "@geist-ui/core";
import style from "../styles/Navbar.module.css";
import styled from "styled-components";
import { useRouter } from "next/router";

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

const Navbar = () => {
  const router = useRouter();
  return (
    <Flex className={style.navbar} p={3}>
      <Box>
        <Liam src="/liam-1.jpeg" name="Liam Ellis">
          Coding, Crypto, UFOs
        </Liam>
      </Box>
      <Box ml="auto">
        <ul>
          <li className={router.pathname == "/" ? `${style.active}` : ""}>
            <Link href="/" passHref>
              home
            </Link>
          </li>
          <li className={router.pathname == "/bio" ? `${style.active}` : ""}>
            <Link href="/bio" passHref>
              bio
            </Link>
          </li>
          <li className={router.pathname == "/work" ? `${style.active}` : ""}>
            <Link href="/work" passHref>
              work
            </Link>
          </li>
          <li className={router.pathname == "/blog" ? `${style.active}` : ""}>
            <Link href="/blog" passHref>
              blog
            </Link>
          </li>
        </ul>
      </Box>
    </Flex>
  );
};

export default Navbar;
