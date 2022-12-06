import { useStaticQuery, graphql } from "gatsby"

export const useEssentialImages = () => {
  return useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "Essentials/Nip-&-Fab-hero.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image2: file(relativePath: { eq: "Essentials/Penhaligons-Book.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image3: file(relativePath: { eq: "Essentials/Klarna-V2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image4: file(relativePath: { eq: "Essentials/Beauty-Pie-3-V2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image5: file(relativePath: { eq: "Essentials/Penhaligon-Portrait-Cafe-Menu.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image6: file(relativePath: { eq: "Essentials/Bare-Minerals-V2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image7: file(relativePath: { eq: "Essentials/Guerlain-Aqua-Allegoria.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image8: file(relativePath: { eq: "Essentials/Beauty-Pie-Oxygen.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image9: file(relativePath: { eq: "Essentials/Penhaligons-Invitation.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image10: file(relativePath: { eq: "Essentials/Guerlain-6.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image11: file(relativePath: { eq: "pic_n_mix.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
}