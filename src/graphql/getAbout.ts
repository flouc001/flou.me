export const getAboutQueryDocument = /* GraphQL */ `
  query getAbout {
    aboutCollection {
      items {
        main {
          json
        }
      }
    }
  }
`;
