import { gql } from '@apollo/client';

// GET PORTFOLIO POST
export const GET_PORTFOLIO_SLIDER = gql`
  query GET_PORTFOLIO_SLIDER {
    posts(where: { orderby: { field: DATE, order: ASC } }, first: 12) {
      nodes {
        portfolio {
          sector
          stage
          companyDesc
          companyName
          logo {
            sourceUrl
          }
        }
      }
    }
  }
`;
