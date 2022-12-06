import { useStaticQuery, graphql } from "gatsby"

export const useInfluencerImages = () => {
  return useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "PR/intro.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image3: file(relativePath: { eq: "PR/Sleek-Make-Up_retouched.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image4: file(relativePath: { eq: "PR/Buxom-Plumpline-Lip-Liner.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image6: file(relativePath: { eq: "Beauty-Pie2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image7: file(relativePath: { eq: "cropped/Radial.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image8: file(relativePath: { eq: "cropped/Lipstick-Queen.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 550) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image9: file(relativePath: { eq: "cropped/Max-Factor-Miracle-Touch-Foundation.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image10: file(relativePath: { eq: "cropped/Dial-Up-The-Volume.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image11: file(relativePath: { eq: "cropped/Feel-Unique-Charlotte-Tilbury.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image12: file(relativePath: { eq: "cropped/Caviar-Volume-Panoramic-Mascara-1.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 384) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image13: file(relativePath: { eq: "PR/Laura-Mercier-Caviar-Chrome-Collection.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 768) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
}