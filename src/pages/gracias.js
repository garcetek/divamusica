import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const GraciasPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Gracias — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/happy.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">GRACIAS !!</h1>
          <p>Ya recibimos tu mensaje y en breve nos ponemos en Contacto...</p>
          <a href="/">Volver al Inicio</a>
        </div>
      </div>
    </Layout>
  )
}
export default GraciasPage
export const pageQuery = graphql`
  query GraciasPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
