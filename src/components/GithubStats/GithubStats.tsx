import { Box, Flex } from "rebass";
import { GeistUIThemes, Text } from "@geist-ui/react";

import { ContributionCalendar } from "./ContributionCalendar/ContributionCalendar";
import ProjectCard from "./ProjectCard";
import makeStyles from "../makeStyles";
import useMedia from "use-media";

export const useStylesContentStyles = makeStyles((ui: GeistUIThemes) => ({
  root: {
    position: "relative",
    zIndex: 10,
  },
  content: {
    width: "auto",
    maxWidth: "100%",
    height: `calc(100vh - 355px)`,
    // boxSizing: "border-box",
    overflow: "scroll",
    margin: "0 auto",
    padding: `0 ${ui.layout.pageMargin} 0`,
    // transform: "translateY(-35px)",
  },
  titleSection: {
    width: "100%",
    padding: `0 240px`,
    margin: "auto 0",
    borderBottom: "solid 1px #333",
  },
  flex: {
    width: "100%",
    // maxWidth: "782pt",
    margin: "auto!important",
  },
  row: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 1,
    maxWidth: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  projects: {
    width: "100%",
  },
  activity: {
    flex: 1,
    width: "100%",
  },
  [`@media screen and (min-width: ${ui.layout.pageWidthWithMargin})`]: {
    content: {
      width: ui.layout.pageWidthWithMargin,
      maxWidth: "100%",
      height: `calc(100vh - 355px)`,
      // boxSizing: "border-box",
      overflow: "scroll",
      margin: "0 auto",
      padding: `${ui.layout.pageMargin} ${ui.layout.pageMargin} 0`,
      // transform: "translateY(-35px)",
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },

    activity: {
      width: "70%",
    },
    projects: {
      // width: 540,
      width: "30%",
      marginRight: 80,
    },
    activityTitle: {
      marginTop: "0 !important",
      marginBottom: 30,
      fontSize: "14px !important",
      textAlign: "start !important",
    },
    viewAll: {
      marginBottom: "0 !important",
      textAlign: "start !important",
    },
  },
  viewAll: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: ui.layout.gap,
    textAlign: "center",
  },
  activityTitle: {
    fontWeight: 700,
    margin: 0,
    fontSize: 24,
    textAlign: "center",
    width: "100%",
    padding: `8pt`,
  },
}));

const GithubStats = ({
  contributionsCollection: {
    contributionCalendar,
    commitContributionsByRepository,
  },
  topRepositories,
}) => {
  const classes = useStylesContentStyles();
  const isMobile = useMedia({ maxWidth: "768px" });

  return (
    <div className={classes.root}>
      {!isMobile && (
        <Box className={classes.titleSection}>
          <Flex justifyContent="space-between" className={classes.flex}>
            <Text h2 className={classes.activityTitle}>
              Top Repositories
            </Text>
            <Text h2 className={classes.activityTitle}>
              Contributions
            </Text>
          </Flex>
        </Box>
      )}
      <div className={classes.content}>
        <div className={classes.row}>
          <div className={classes.projects}>
            {isMobile && (
              <Text h2 className={classes.activityTitle}>
                Top Repositories
              </Text>
            )}
            {topRepositories.edges?.map((edge, i) => (
              <ProjectCard key={i} project={edge.node} />
            ))}
          </div>
          <div className={classes.activity}>
            {isMobile && (
              <Text h2 className={classes.activityTitle}>
                Contributions
              </Text>
            )}
            <ContributionCalendar contributionCalendar={contributionCalendar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
