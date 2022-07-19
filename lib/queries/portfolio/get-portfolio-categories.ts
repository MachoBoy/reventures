import { gql } from '@apollo/client';

// GET PORTFOLIO CATEGORIES
export const GET_PORTFOLIO_CATEGORIES = gql`
  query GET_PORTFOLIO_POSTS {
    categories(first: 20) {
      nodes {
        categoryId
        name
      }
    }
  }
`;
