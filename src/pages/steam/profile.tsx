import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import { PageProps } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const ProfilePage = () => {
  // const profileImage = getImage(data.steam.avatar)
  return (
    <Layout pageTitle="">
      {/* Steam user Profile pic: 
        Desktop Viewport: 170px X 170px
        Mobile Viewport: 120px X 120px
      */}
      <StaticImage
        src="../../images/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
        alt="stock image of library"
      />
      {/* <GatsbyImage
        image={profileImage}
        alt={"Placeholder Profile Picture"}
      /> */}
      {/* Profile Name: 
      Desktop Viewport: <h2/>, right of Profile Picture
      Mobile Viewport: <h2/>, Centered under profilepicture
      */}
      <p>PROFILE NAME </p>
      <Link to="/">
        <p>Back to Home</p>
      </Link>
    </Layout>
  )
}
export default ProfilePage
/* 
export const query = graphql`
  query ProfilePage($id: String) {
    
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
