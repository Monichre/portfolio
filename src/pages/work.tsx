/* eslint-disable react/jsx-no-comment-textnodes */

import { GET_GITHUB } from "../lib/queries";
import GithubStats from "../components/GithubStats/GithubStats";
import { getQuery } from "../lib/api";
import style from "../styles/Project.module.css";

const Work = ({ data: { user } }) => {
  console.log("user: ", user);
  return (
    <div className={style.project}>
      <GithubStats {...user} />
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await getQuery(GET_GITHUB);

  return {
    props: {
      data,
    },
  };
}

export default Work;
