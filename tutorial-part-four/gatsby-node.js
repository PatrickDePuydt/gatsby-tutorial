const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(`\n` + `=> => => => => => => => =>`);
//     const fileNode = getNode(node.parent)
//     console.log(`\n`, fileNode.relativePath)
//   }
// };

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
  }
};