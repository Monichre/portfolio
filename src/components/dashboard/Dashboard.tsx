import * as React from "react";

import {
  AppItem,
  AppRow,
  CloudTag,
  DashboardWrap,
  Overlay,
  TagCloud,
  TopRow,
} from "./Dashboard.style";

interface AppPreviewProps {
  app: any;
}

const AppPreview: React.FC<AppPreviewProps> = ({ app }) => {
  const { tags } = app;

  return (
    <AppItem
      style={{
        background: `url(${app.preview.images[0]}) no-repeat center center fixed, #2126254c`,
      }}
    >
      <Overlay />
      <div className="content">
        <h4 className="main__discover-place-heading">{app.name}</h4>
        <p className="main__discover-place-sub">{app.description}</p>
        {/* {app.tags.toString()} */}
        <div className="main__discover__more">
          <div
            className="main__discover__more-svg"
            style={{
              background:
                "linear-gradient( 120deg, rgba(80,227,193,0.8), 10%, hsl(0deg 0% 0%) 60% )",
            }}
          >
            {app?.preview?.favicons[0] ? (
              <img src={app?.preview?.favicons[0]} />
            ) : null}
          </div>
        </div>
      </div>
    </AppItem>
  );
};

interface DashboardProps {
  apps: any[];
  posts?: any[];
  github: { repos: any; contributionData: any };
  tags: string[];
}

const Dashboard: React.FC<DashboardProps> = ({
  github: { repos },
  apps,
  posts,
  tags,
}) => {
  //
  return (
    <DashboardWrap>
      <main className="main">
        <TopRow>
          <TagCloud>
            {tags.map((tag) => (
              <CloudTag>{tag}</CloudTag>
            ))}
          </TagCloud>
          <AppRow>
            <div className="main__cards-container-heading-wrap">
              <h2 className="main__cards-container-heading ss-heading">
                Recently Sourced from my Github
              </h2>
            </div>

            <div className="main__cards">
              {repos.map((repo) => (
                <AppPreview app={repo} key={repo.name} />
              ))}
            </div>

            <div className="main__cards-pagination">
              <span className="ss-dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <div className="main__cards-buttons">
                <button style={{ opacity: 0.4 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </AppRow>
        </TopRow>

        <div className="main__crossing-container">
          <div className="main__crossing-current">
            <p className="main__crossing-upper">Dev | Code</p>
            <h3 className="main__crossing-heading">Latest Apps</h3>
          </div>
        </div>

        <div className="main__discover">
          <div className="main__discover-places">
            {apps.map((app: any) => {
              return <AppPreview app={app} key={app.name} />;
            })}

            <div className="main__discover-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </DashboardWrap>
  );
};

export default Dashboard;
