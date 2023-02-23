import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import { PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostPage = ({
  data,
  children}: PageProps<Queries.BlogPostPageQuery>) => {
  const heroImage = getImage(data.mdx?.frontmatter?.hero_image)!
  return (
    <Layout pageTitle={String(data.mdx?.frontmatter?.title)}>
      <p>Posted: {data.mdx?.frontmatter?.date}</p>
      <GatsbyImage
        image={heroImage}
        alt={String(data.mdx?.frontmatter?.hero_image_alt)}
      />
      <p>
        Photo Credit:{" "}
        <a href={String(data.mdx?.frontmatter?.hero_image_credit_link)}>
          {data.mdx?.frontmatter?.hero_image_credit_text}
        </a>
      </p>
      {children}
      <Link to="/discussion">
        <p>Back</p>
      </Link>
    </Layout>
  )
}

export default BlogPostPage

export const query = graphql`
  query BlogPostPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }: PageProps<Queries.BlogPostPageQuery>) => (
  <SEO
    title={String(data.mdx?.frontmatter?.title)}
    description={""}
    pathname={""}
    children={undefined}
  />
)
