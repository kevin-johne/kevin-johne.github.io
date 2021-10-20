const projects = require("./src/data/projects.json");

exports.createPages = async ({ actions: { createPage } }) => {

  projects.forEach(project => {
    createPage({
      path: `/work/${project.title.toLowerCase()}/`,
      component: require.resolve("./src/templates/project.js"),
      context: { project },
    })
  })

}
