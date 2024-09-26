const path = require("path");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allProjectsJson {
        nodes {
          id
          path
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const projects = result.data.allProjectsJson.nodes;

  projects.forEach((project, index) => {
    createPage({
      path: `/work/${project.path.toLowerCase()}/`,
      component: path.resolve(`./src/templates/project.jsx`),
      context: {
        id: project.id,
        prevId: projects[index - 1] ? projects[index - 1].id : null,
        nextId: projects[index + 1] ? projects[index + 1].id : null,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `

    type Image {
      title: String
    }
    type Link {
      text: String
      href: String
    }
    type Spacer {
      spacerSize: String
    }
    type ProjectsJsonBlocks implements Node {
      type: String!
      content: [String]
      title: String
      image: Image
      links: [Link]
      spacerSize: Spacer
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
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
