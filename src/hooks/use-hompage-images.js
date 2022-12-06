import { useStaticQuery, graphql } from "gatsby"

export const useHomepageImages = () => {
  return useStaticQuery(
    graphql`
      query {
        slide1: file(relativePath: { eq: "homepage/HOMEPAGE-1.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        slide2: file(relativePath: { eq: "homepage/HOMEPAGE-2.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        slide3: file(relativePath: { eq: "homepage/HOMEPAGE-3.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        slide4: file(relativePath: { eq: "homepage/HOMEPAGE-4.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        slide5: file(relativePath: { eq: "homepage/HOMEPAGE-5.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        slide6: file(relativePath: { eq: "homepage/HOMEPAGE-6.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        slide7: file(relativePath: { eq: "homepage/HOMEPAGE-7.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        aboutImage: file(relativePath: { eq: "HOMEPAGE-PIC.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        aboutLogo: file(relativePath: { eq: "shiseido.png" }) {
          childImageSharp {
            fixed(quality: 80, width: 160) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        serviceImage1: file(relativePath: { eq: "Max-Factor-Box.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        serviceImage2: file(relativePath: { eq: "essentials-intro.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        serviceImage3: file(relativePath: { eq: "packaging-image.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
}