import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import { PageProps } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const ProfilePage = ({
  data,
  children,
}: PageProps<Queries.ProfilePageQuery>) => {
  const profileImage = getImage(data.imageSharp?.gatsbyImageData)!
  return (
    <Layout pageTitle="Steam Profile">
      <div className="flex flex-row items-center">
        <GatsbyImage image={profileImage} alt={"Placeholder Profile Picture"} />
        {/* <StaticImage
          src="../../images/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
          alt="stock image of library"
          placeholder="blurred"
          width={170}
          height={170}
        /> */}
        {/* Profile Name: 
          Desktop Viewport: <h2/>, right of Profile Picture
          Mobile Viewport: <h2/>, Centered under profilepicture
        */}
        <h1 className="flex flex-1 justify-center text-2xl">
          Placeholder Profile
        </h1>
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

// = "20d663d7-151a-5c75-a853-00efe6137484"

export const query = graphql`
  query ProfilePage($id: String) {
    imageSharp(id: { eq: $id }) {
      id
      gatsbyImageData
    }
  }
`

/* 
export const query = graphql`
  query ProfilePage($id: String) {
    imageSharp(id: { eq: $id }) {
      id
      gatsbyImageData
    }
  }
` */

export const Head = () => (
  <SEO
    title={"PlaceholderProfile"}
    description={""}
    pathname={""}
    children={undefined}
  />
)
