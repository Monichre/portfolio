export const GET_BLOG_POSTS = `
query postCollectionQuery {
  postCollection {
    items {
      sys {
        id
        publishedAt
        
      }
      title
      tags
      content {
        json 
      }
      image {
        url
      }
      slug
      
    }
  }
}
`;

export const GET_WEB_APPS = `
query appCollectionQuery {
  appCollection {
    items {
      tags
      url
      name
    }
  }
}
`;
