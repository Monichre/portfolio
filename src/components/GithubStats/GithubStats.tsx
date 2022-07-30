import {
  ChannelBox,
  ChannelLogo,
  Epg,
  Layout,
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramImage,
  ProgramStack,
  ProgramText,
  ProgramTitle,
  TimelineBox,
  TimelineDivider,
  TimelineDividers,
  TimelineTime,
  TimelineWrapper,
  useEpg,
  useProgram,
  useTimeline,
} from "planby";
import {
  endOfDay,
  format,
  getWeek,
  getWeekOfMonth,
  startOfDay,
} from "date-fns";

const ChannelItem = ({ channel }) => {
  console.log("channel: ", channel);
  const { position, logo } = channel;
  return (
    <ChannelBox {...position}>
      <ChannelLogo src={logo} alt="Logo" />
    </ChannelBox>
  );
};

const ProgramItem = ({ program, ...rest }) => {
  console.log("rest: ", rest);
  console.log("program: ", program);
  const { styles, formatTime, set12HoursTimeFormat, isLive, isMinWidth } =
    useProgram({
      program,
      ...rest,
    });

  const { data } = program;
  console.log("data: ", data);
  const { image, title, since, till } = data;
  console.log("title: ", title);

  const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
  const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

  return (
    <ProgramBox width={styles.width} style={styles.position}>
      <ProgramContent width={styles.width} isLive={isLive}>
        <ProgramFlex>
          {isLive && isMinWidth && <ProgramImage src={image} alt="Preview" />}
          <ProgramStack>
            <ProgramTitle>{title}</ProgramTitle>
            <ProgramText>
              {sinceTime} - {tillTime}
            </ProgramText>
          </ProgramStack>
        </ProgramFlex>
      </ProgramContent>
    </ProgramBox>
  );
};

export function Timeline({
  isBaseTimeFormat,
  isSidebar,
  dayWidth,
  hourWidth,
  numberOfHoursInDay,
  offsetStartHoursRange,
  sidebarWidth,
}) {
  const { time, dividers, formatTime } = useTimeline(
    numberOfHoursInDay,
    isBaseTimeFormat
  );

  const renderTime = (index) => (
    <TimelineBox key={index} width={hourWidth}>
      <TimelineTime>
        {formatTime(index + offsetStartHoursRange).toLowerCase()}
      </TimelineTime>
      <TimelineDividers>{renderDividers()}</TimelineDividers>
    </TimelineBox>
  );

  const renderDividers = () =>
    dividers.map((_, index) => (
      <TimelineDivider key={index} width={hourWidth} />
    ));

  return (
    <TimelineWrapper
      dayWidth={dayWidth}
      sidebarWidth={sidebarWidth}
      isSidebar={isSidebar}
    >
      {time.map((_, index) => renderTime(index))}
    </TimelineWrapper>
  );
}

const GithubStats = ({ contributionCalendar }) => {
  const { weeks, months } = contributionCalendar;

  const contributions = weeks.map((contribution) => ({
    ...contribution,

    week: getWeekOfMonth(new Date(contribution.date)),
    id: `week-${getWeek(new Date(contribution.date))}_day-${
      contribution.weekday
    }`,
    title: ` ${format(new Date(contribution.date), "MMMM dddd yyyy")}`,
    since: startOfDay(new Date(contribution.date)),
    till: endOfDay(new Date(contribution.date)),
    image: "",
  }));

  const monthly = months.map((month) => {
    return {
      ...month,
      uuid: `${month.name}-${month.year}`,
      logo: "/calendar.svg",
      // contributions: monthlyContributions,
    };
  });
  const { getEpgProps, getLayoutProps } = useEpg({
    channels: monthly,
    epg: contributions,
    dayWidth: 7200,
    sidebarWidth: 100,
    itemHeight: 80,
    isSidebar: true,

    isTimeline: true,
    isLine: true,
    startDate: "2022/01/01",
    // endDate: "2022-05-25T24:00:00",
    // startDate: new Date(months[0].firstDay),
    // endDate: new Date(months[11].firstDay),
    // isBaseTimeFormat: true,
  });
  return (
    <div>
      <div style={{ height: "80vh", width: "100%" }}>
        <Epg isLoading={false} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderProgram={({ program, ...rest }) => {
              console.log("program: ", program);
              return (
                <ProgramItem
                  key={program.data.id}
                  program={program}
                  {...rest}
                />
              );
            }}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
          />
        </Epg>
      </div>
    </div>
  );
};

export default GithubStats;
