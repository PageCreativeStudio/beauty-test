import { useStaticQuery, graphql } from "gatsby"

export const useContactImages = () => {
  return useStaticQuery(
    graphql`
      query {
        bg: file(relativePath: { eq: "contact.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
}