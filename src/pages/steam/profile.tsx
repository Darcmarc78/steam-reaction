import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import { PageProps } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const profileName = "Placeholder Profile"

const ProfilePage = ({
  data,
  children,
}: PageProps<Queries.ProfilePageQuery>) => {
  const profileImage = getImage(data.file)!
  return (
    <Layout pageTitle={profileName}>
      <div className="flex flex-row items-center">
        <GatsbyImage
          image={profileImage}
          alt={"Placeholder Profile Picture"}
        />
        <h1 className="flex flex-1 justify-center text-2xl">{profileName}</h1>
      </div>

      {/* Steam Library Component:
        Horizontal Rule at top
        Width: Viewport span
        < Individual Steam Game> Component
      */}
      <hr className="py-4" />
      <p className="flex flex-1 justify-center py-4 text-3xl">
        [STEAM LIBRARY COMPONENT]
      </p>

      <Link to="/">
        <p>Back to Home</p>
      </Link>
    </Layout>
  )
}

export default ProfilePage

export const query = graphql`
  query ProfilePage {
    file(childImageSharp: { id: { eq: "270a3238-6de2-5e1b-876d-a9fe25e054c6" } }) {
      childImageSharp {
        id
        gatsbyImageData(width: 170, height: 170, placeholder: DOMINANT_COLOR)
      }
    }
  }
`

export const Head = () => (
  <SEO
    title={profileName}
    description={""}
    pathname={""}
    children={undefined}
  />
)
