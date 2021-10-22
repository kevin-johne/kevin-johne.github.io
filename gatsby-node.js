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

  projects.forEach(( project, index ) => {
    createPage({
      path: `/work/${project.title.toLowerCase()}/`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        id: project.id,
        prevId: projects[index - 1] ? projects[index - 1].id : null,
        nextId: projects[index + 1] ? projects[index + 1].id : null,
      },
    })
  })

}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /tiny-slider/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

