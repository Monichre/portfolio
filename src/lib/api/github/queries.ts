export const GET_GITHUB_USER = `query{
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
          url
          homepageUrl
          pushedAt
          updatedAt
        }
      }
    }
    contributionsCollection {
    
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
            name
            homepageUrl
            description
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
