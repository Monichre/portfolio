import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className={style.navbar}>
      <ul>
        <Link href="/" passHref>
          <li className={router.pathname == "/" ? `${style.active}` : ""}>
            _home
          </li>
        </Link>
        <Link href="/bio" passHref>
          <li className={router.pathname == "/bio" ? `${style.active}` : ""}>
            _bio
          </li>
        </Link>
        <Link href="/work" passHref>
          <li className={router.pathname == "/work" ? `${style.active}` : ""}>
            _work
          </li>
        </Link>
        <Link href="/blog" passHref>
          <li className={router.pathname == "/blog" ? `${style.active}` : ""}>
            _blog
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
