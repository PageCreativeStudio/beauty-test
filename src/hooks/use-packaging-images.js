import { useStaticQuery, graphql } from "gatsby"

export const usePackagingImages = () => {
  return useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "Packaging/intro.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image2: file(relativePath: { eq: "Packaging/Penhaligons-Luna-Eau-de-Toilette.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image3: file(relativePath: { eq: "Packaging/Bare-Pro-Bare-Minerals.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image4: file(relativePath: { eq: "Packaging/Bare-Minerals-The-Power-of-Good.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image6: file(relativePath: { eq: "Packaging/Iconic-London.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image7: file(relativePath: { eq: "Packaging/Ocean-Independance-Bag.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image8: file(relativePath: { eq: "Packaging/Vitage-Boxes.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
}