const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const {createPage} = actions; // actions is undefined

   // Query the pages and products from GraphQL
   const result = await graphql(`
   {
    pages: allContentfulPage {
      nodes {
        contentful_id
        slug
        pageType
      }
    }
  }
 `)  

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results
  const { pages } = result.data

  // ==== Page Types ====
  pages.nodes.forEach(page => { 
    let productTemplate 

    switch (page.pageType) {

      case 'Home' : 
        productTemplate = path.resolve(`src/templates/home.js`)
        break;

      case 'About' : 
        productTemplate = path.resolve(`src/templates/about.js`) 
        break;
  
      case 'Gallery' : 
        productTemplate = path.resolve(`src/templates/gallery.js`)
        break;

      case 'Contact' : 
        productTemplate = path.resolve(`src/templates/contact.js`)
        break;
      
      case 'Influencer' : 
        productTemplate = path.resolve(`src/templates/influencer.js`)
        break;

      case 'Essentials' : 
        productTemplate = path.resolve(`src/templates/essentials.js`)
        break;

      case 'Packaging' : 
        productTemplate = path.resolve(`src/templates/packaging.js`)
        break;

      default:
        productTemplate = path.resolve(`src/templates/home.js`)
        break;

    }
    createPage({
      path: page.slug,
      component: path.resolve(productTemplate),
      context: {
        id : page.contentful_id,
      }
    })
  })
  // ==== End Page Tyoes ====
}

