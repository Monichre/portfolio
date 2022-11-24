import { ResponsiveCalendar } from '@nivo/calendar';

import { DashboardWrap } from '../components/dashboard/Dashboard.style';

/* eslint-disable react/jsx-no-comment-textnodes */
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

const Work = () => {
  //{ github, apps, posts }
  // const { contributionCalendar, repos } = github || {
  //   contributionCalendar: null,
  //   repos: null,
  // };
  // const tags = []
  //   .concat(
  //     [],
  //     [...apps].map(({ tags }) => [...tags])
  //   )
  //   .flat();

  // const { weeks } = contributionCalendar;

  // const d = []
  //   .concat(
  //     [],
  //     ...weeks.map(({ contributionDays }) => [
  //       ...contributionDays.map((contribution) => {
  //         const { date: day, contributionCount: value, color } = contribution;

  //         let shade = Color(color);
  //         const howWhiteIsThisShit = shade.luminosity();

  //         if (howWhiteIsThisShit > 0.8) {
  //           shade = shade.darken(0.8);
  //         }
  //         const hex = shade.hex();

  //         return {
  //           day,
  //           value,
  //           color: hex,
  //         };
  //       }),
  //     ])
  //   ) // @ts-ignore
  //   .sort((a, b) => new Date(a.day) - new Date(b.day));

  // const colors = d.map(({ color }) => color);
  // const contributions = d.map(({ day, value }) => ({ day, value }));

  // const from = contributions[0].day;
  // const to = contributions[contributions.length - 1].day;

  // const contributionData = {
  //   colors,
  //   contributions,
  //   from,
  //   to,
  // };

  return (
    <DashboardWrap>
      <main className="main">
        <div className="main__crossing-container">
          <div className="main__crossing-current">
            <p className="main__crossing-upper">Dev | Code</p>
            <h3 className="main__crossing-heading">
              This part of the site is under construction
            </h3>
          </div>
        </div>
      </main>
    </DashboardWrap>
    // <Dashboard
    //   tags={tags}
    //   apps={apps}
    //   posts={posts}
    //   github={{ repos, contributionData }}
    // />
  );
};

// export async function getStaticProps() {
//   const data = await queryGitub(GET_GITHUB_USER).then(
//     (data) => data?.user || null
//   );
//   let github = null;
//   if (data) {
//     const {
//       topRepositories,
//       pinnedItems,
//       contributionsCollection: { contributionCalendar },
//     } = data;

//     const nodes = [...topRepositories.edges, ...pinnedItems.edges].map(
//       ({ node }) => node
//     );

//     const repos = await Promise.all(
//       nodes.map(async (repo) => {
//         const url = repo?.homepageUrl
//           ? `https://${repo?.homepageUrl}`
//           : repo?.url;

//         const {
//           description: possibleDescription,
//           siteName,
//           ...preview
//         }: any = await getLinkPreview(url, {
//           followRedirects: `manual`,
//           handleRedirects: (baseURL: string, forwardedURL: string) => {
//             const urlObj = new URL(baseURL);
//             const forwardedURLObj = new URL(forwardedURL);
//             if (
//               forwardedURLObj.hostname === urlObj.hostname ||
//               forwardedURLObj.hostname === "www." + urlObj.hostname ||
//               "www." + forwardedURLObj.hostname === urlObj.hostname
//             ) {
//               return true;
//             } else {
//               return false;
//             }
//           },
//         });

//         const description = possibleDescription || "";

//         return {
//           ...repo,
//           description,
//           preview,
//         };
//       })
//     );
//     github = { contributionCalendar, repos };
//   }

//   const {
//     data: {
//       postCollection: { items: posts },
//     },
//   } = await queryContentful(GET_BLOG_POSTS);

//   const apps = await queryContentful(GET_WEB_APPS).then(
//     async ({
//       data: {
//         appCollection: { items },
//       },
//     }) => {
//       const appsWithPreview = await Promise.all(
//         items.map(async (item: any) => {
//           const { siteName, ...rest }: any = await getLinkPreview(item.url, {
//             followRedirects: `manual`,
//             handleRedirects: (baseURL: string, forwardedURL: string) => {
//               const urlObj = new URL(baseURL);
//               const forwardedURLObj = new URL(forwardedURL);
//               if (
//                 forwardedURLObj.hostname === urlObj.hostname ||
//                 forwardedURLObj.hostname === "www." + urlObj.hostname ||
//                 "www." + forwardedURLObj.hostname === urlObj.hostname
//               ) {
//                 return true;
//               } else {
//                 return false;
//               }
//             },
//           });
//           const { description, ...preview } = rest;

//           return {
//             ...item,
//             preview,
//             description,
//           };
//         })
//       );

//       return appsWithPreview;
//     }
//   );

//   return {
//     props: {
//       github,
//       apps,
//       posts,
//     },
//   };
// }

export default Work;
