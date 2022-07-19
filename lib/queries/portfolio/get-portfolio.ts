import { gql } from '@apollo/client';

// GET PORTFOLIO POST
export const GET_PORTFOLIO_POSTS = gql`
  query GET_PORTFOLIO_POSTS($first: Int, $after: String) {
    posts(
      where: { orderby: { field: DATE, order: ASC } }
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
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
