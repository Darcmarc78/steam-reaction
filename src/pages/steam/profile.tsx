import { Link, graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components/seo"
import { PageProps } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const profileName = "Placeholder Profile"

const ProfilePage = ({ data }: PageProps<Queries.ProfilePageQuery>) => {
  const profileImage = getImage(data)
  if (profileImage == undefined) {
    return (
      <Layout pageTitle={profileName}>
        <div className="flex flex-row items-center">
          <p>[Undefined Image]</p>
          <h1 className="flex flex-1 justify-center text-2xl">{profileName}</h1>
        </div>
        <hr className="py-4" />
        <p className="flex flex-1 justify-center py-4 text-3xl">
          [STEAM LIBRARY COMPONENT]
        </p>

        <Link to="/">
          <p>Back to Home</p>
        </Link>
      </Layout>
    )
  } else {
    return (
      <Layout pageTitle={profileName}>
        <div className="flex flex-row items-center">
          <GatsbyImage
            image={profileImage}
            alt={"Placeholder Profile Picture"}
          />
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
}
export default ProfilePage

// = "20d663d7-151a-5c75-a853-00efe6137484"

/* export const query = graphql`
query ProfilePage {
  allImageSharp {
    nodes {
      gatsbyImageData
    }
  }
}
` */

export const query = graphql`
  query ProfilePage {
    imageSharp(id: { eq: "20d663d7-151a-5c75-a853-00efe6137484" }) {
      gatsbyImageData(width: 170, height: 170)
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
