import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="My first React page !" />
    <div class="Hero">
      <div class="HeroGroup">
        <h1>Welcome on my portfolio!</h1>
        <p>
          This is my first web design with <br></br> React & Gatsby :)
        </p>
        <p>Now go build something marvelous!.</p>
        <br></br>
        <a> Watch the video</a>
      </div>
    </div>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
