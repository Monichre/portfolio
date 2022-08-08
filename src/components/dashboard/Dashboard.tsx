// Import Swiper styles
import "swiper/css";

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
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { FunctionComponent } from "react";

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

interface ControlsProps {}

const Controls: FunctionComponent<ControlsProps> = () => {
  const swiper = useSwiper();
  return (
    <div className="main__cards-pagination">
      <span className="ss-dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div className="main__cards-buttons">
        <button onClick={() => swiper.slidePrev()}>
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
        <button onClick={() => swiper.slideNext()}>
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
  );
};

interface ReposProps {
  repos: any;
}

const Repos: FunctionComponent<ReposProps> = ({ repos }) => {
  return (
    <AppRow>
      <div className="main__cards-container-heading-wrap">
        <h2 className="main__cards-container-heading ss-heading">
          Recently Sourced from my Github
        </h2>
      </div>

      <div className="main__cards">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {repos.map((repo) => (
            <SwiperSlide key={repo.name}>
              <AppPreview app={repo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AppRow>
  );
};

interface AppsProps {
  apps: any;
}

const Apps: FunctionComponent<AppsProps> = ({ apps }) => {
  return (
    <div className="main__discover">
      <div className="main__discover-places">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {apps.map((app: any) => {
            return (
              <SwiperSlide key={app.name}>
                <AppPreview app={app} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
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
  return (
    <DashboardWrap>
      <main className="main">
        <TopRow>
          <TagCloud>
            {tags.map((tag) => (
              <CloudTag>{tag}</CloudTag>
            ))}
          </TagCloud>
          <Repos repos={repos} />
        </TopRow>

        <div className="main__crossing-container">
          <div className="main__crossing-current">
            <p className="main__crossing-upper">Dev | Code</p>
            <h3 className="main__crossing-heading">Latest Apps</h3>
          </div>
        </div>
        <Apps apps={apps} />
      </main>
    </DashboardWrap>
  );
};

export default Dashboard;

// For mobile: https://codesandbox.io/s/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/cards-stack
