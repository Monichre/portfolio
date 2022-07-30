export const GET_GITHUB = `query{
  user(login: "monichre") {
    login
    status {
      message
    }
    avatarUrl
    bio
    topRepositories(orderBy: {field: CREATED_AT, direction: DESC}, first: 10) {
      edges {
        node {
          name
          owner {
            avatarUrl
            login
          }
          pushedAt
          updatedAt
        }
      }
    }
    contributionsCollection {
      commitContributionsByRepository {
        contributions(first: 10) {
          edges {
            node {
              commitCount
              occurredAt
              repository {
                name
                owner {
                  avatarUrl
                }
              }
            }
          }
        }
      }
      totalCommitContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
      totalRepositoriesWithContributedCommits
      totalRepositoriesWithContributedPullRequests
      totalRepositoryContributions
      contributionCalendar {
        months {
          name
          totalWeeks
          firstDay
          year
        }
        totalContributions
        weeks {
          contributionDays {
            color
            contributionCount
            contributionLevel
            date
            weekday
          }
        }
        colors
      }
    }
    organizations(first: 10) {
      edges {
        node {
          avatarUrl
          name
        }
      }
    }
    pinnedItems(first: 5) {
      edges {
        node {
          ... on Repository {
            name
            url
            owner {
              login
              avatarUrl
            }
          }
        }
      }
    }
    repositories(first: 20, orderBy: {field: STARGAZERS, direction: DESC}) {
      totalCount
    }
  }
}`;
