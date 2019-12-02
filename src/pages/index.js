import React from "react";

import Layout from "../components/layout";
import PostLink from "../components/post-link";
import SEO from "../components/seo";

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges }
    }
}) => {
    const Posts = edges
          .filter(edge => !!edge.node.frontmatter.date)
          .map(edge => <PostLink key={edge.node.id} post={edge.node}/>);
    return (
    <Layout>
      <SEO title="Home" />
      <p>Audio archive of reading club discussions at Vernacular.ai. Check the repository <a href="https://github.com/Vernacular-ai/several-people-are-talking/">here</a> for more details on what goes here.</p>
      <hr/>
      <h2>Posts</h2>
      <div>{Posts}</div>
    </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
