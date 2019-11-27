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
      <p><a href="https://github.com/Vernacular-ai/several-people-are-talking/">Audio archive</a> of reading club discussions at Vernacular.ai.</p>
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
