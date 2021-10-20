const path = require("path")

exports.createPages = async ({graphql,  actions: { createPage } }) => {

  const result = await graphql(`
    query {
      allProjectsJson {
        nodes {
          id
          title
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const projects = result.data.allProjectsJson.nodes

  projects.forEach(( project ) => {
    createPage({
      path: `/work/${project.title.toLowerCase()}/`,
      component: path.resolve(`./src/templates/project.js`),
      context: { id: project.id },
    })
  })

}
