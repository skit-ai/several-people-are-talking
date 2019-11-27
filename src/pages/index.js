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
      <p>Audio archive of reading club discussions at Vernacular.ai.</p>
      <p>To make the discussions concise and fruitful, we have a list of questions that you should attempt to answer in your summaries. Since different kinds of readings, at different times, have different provenances and purposes, a summary might only cover a subset of this. Though if your summary doesn't answer any question from here then
      </p>
      <ul style={{listStyleType: "lower-alpha"}}>
        <li>let's talk and add a new question or</li>
        <li>let's again talk and figure out a better summary.</li>
      </ul>

      <ul>
        <li>Why did you choose this book/article/whatever (called baw henceforth)?</li>
        <li>Where did you come across this baw?</li>
        <li>What did you learn in this baw?</li>
        <li>What did you like in this baw?</li>
        <li>What did you not like in this baw?</li>
      </ul>
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
