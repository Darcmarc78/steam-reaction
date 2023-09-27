import * as React from "react"
import { SEO } from "../components/seo"
import HomePage from "./home"

const App = () => {
  return <HomePage />
}

export const Head = () => (
  <SEO title={""} description={""} pathname={""} children={undefined} />
)
export default App
