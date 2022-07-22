/* eslint-disable react/jsx-no-comment-textnodes */

import { GET_GITHUB } from "../lib/queries";
import GithubStats from "../components/GithubStats/GithubStats";
import { getQuery } from "../lib/api";
import style from "../styles/Project.module.css";

const Work = ({ data }) => {
  return (
    <div className={style.project}>
      <GithubStats {...data} />
    </div>
  );
};

export async function getStaticProps() {
  const {
    data: { user: data },
  } = await getQuery(GET_GITHUB);

  return {
    props: {
      data,
    },
  };
}

export default Work;
