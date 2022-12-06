import { useStaticQuery, graphql } from "gatsby"

export const useAboutImages = () => {
  return useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "cropped/Radial.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image2: file(relativePath: { eq: "slider-2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image3: file(relativePath: { eq: "slider-3.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image4: file(relativePath: { eq: "Essentials/Klarna-V2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image5: file(relativePath: { eq: "Essentials/Bare-Minerals-V2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image6: file(relativePath: { eq: "Packaging/Iconic-London.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image7: file(relativePath: { eq: "Essentials/Beauty-Pie-Oxygen.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image8: file(relativePath: { eq: "Packaging/Ocean-Independance-Bag.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image9: file(relativePath: { eq: "Packaging/Penhaligons-Luna-Eau-de-Toilette.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image10: file(relativePath: { eq: "PR/Buxom-Holographic-Lip-Polish.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image11: file(relativePath: { eq: "PR/Buxom-Plumpline-Lip-Liner.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image12: file(relativePath: { eq: "essentials-intro.jpg" }) {
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