import { gql } from '@apollo/client';

// GET PORTFOLIO POST
export const GET_PORTFOLIO_POSTS = gql`
  query GET_PORTFOLIO_POSTS(
    $first: Int
    $after: String
    $search: String
    $categoryId: Int
  ) {
    posts(
      where: {
        orderby: { field: DATE, order: DESC }
        search: $search
        categoryId: $categoryId
      }
      first: $first
      after: $after
    ) {
      nodes {
        portfolio {
          sector
          stage
          ceoName
          location
          companyDesc
          companyName
          foundDate
          logo {
            sourceUrl
          }
        }
        categories {
          nodes {
            categoryId
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
