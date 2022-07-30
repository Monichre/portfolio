/* eslint-disable react/jsx-no-comment-textnodes */

import { Box, Flex } from "rebass";

import Color from "color";
import { GET_GITHUB } from "../lib/queries";
import { Grid } from "@geist-ui/react";
import ProjectCard from "../components/GithubStats/ProjectCard";
import { ResponsiveCalendar } from "@nivo/calendar";
import { getQuery } from "../lib/api";
import style from "../styles/Project.module.css";

const Activity = ({ data, from, to, colors /* see data tab */ }) => (
  <ResponsiveCalendar
    data={data}
    from={from}
    to={to}
    emptyColor="transparent"
    colors={colors}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={40}
    monthBorderColor="none"
    dayBorderWidth={1}
    dayBorderColor="#50e3c1"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left",
      },
    ]}
  />
);
const Work = ({ data }) => {
  const {
    contributionsCollection: { contributionCalendar },
    topRepositories,
  } = data;

  const { weeks } = contributionCalendar;

  const d = []
    .concat(
      [],
      ...weeks.map(({ contributionDays }) => [
        ...contributionDays.map((contribution) => {
          const { date: day, contributionCount: value, color } = contribution;

          let shade = Color(color);
          const howWhiteIsThisShit = shade.luminosity();

          if (howWhiteIsThisShit > 0.8) {
            shade = shade.darken(0.8);
          }
          const hex = shade.hex();

          return {
            day,
            value,
            color: hex,
          };
        }),
      ])
    ) // @ts-ignore
    .sort((a, b) => new Date(a.day) - new Date(b.day));

  const colors = d.map(({ color }) => color);
  const contributions = d.map(({ day, value }) => ({ day, value }));

  const from = contributions[0].day;
  const to = contributions[contributions.length - 1].day;

  return (
    <div className={style.project}>
      <Flex
        mt={5}
        justifyContent={"center"}
        alignItems="center"
        alignContent="center"
        style={{ height: "inherit" }}
      >
        <Grid.Container
          gap={2}
          justifyContent="space-evenly"
          style={{ width: "30vw" }}
        >
          {topRepositories.edges?.map((edge, i) => (
            <Grid xs={6}>
              <ProjectCard key={i} project={edge.node} />
            </Grid>
          ))}
        </Grid.Container>

        <Box p={1} style={{ width: "60vw", height: "inherit" }}>
          <Activity data={contributions} from={from} to={to} colors={colors} />
        </Box>
      </Flex>
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
