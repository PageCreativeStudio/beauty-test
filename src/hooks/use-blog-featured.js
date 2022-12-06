import { useStaticQuery, graphql } from "gatsby"

export const useBlogFeatured = () => {
  return useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "Packaging/gallery/Bare-Minerals-The-Power-of-Good.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image2: file(relativePath: { eq: "Packaging/gallery/Penhaligons-Small-Sprays-1_retouched.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image3: file(relativePath: { eq: "blog/Rodial-Box.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
}