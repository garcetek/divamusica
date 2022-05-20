import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contacto — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">HOLA...</h1>
          <p>Completa el fomulario y nos ponemos en Contacto&rarr;</p>
        </div>
        <div>
          <form 
           className="form-container" 
           name="divamusica"
           method="post"
           data-netlify="true"
           data-netlify-honeypot="bot-field"
           onSubmit={handleSubmit}
            >
            <input type="hidden" name="divamusica" value="contacto" />
              <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
            <div>
              <label htmlFor="Name">Nombre</label>
              <input type="text" name="Name" id="Name"/>
            </div>
            <div>
              <label htmlFor="Sender">Email</label>
              <input type="email" name="Sender" id="Sender"/>
            </div>
            <div>
              <label htmlFor="Subject">Asunto</label>
              <input type="text" name="Subject" id="Subject"/>
            </div>
            <div>
              <label htmlFor="Message">Mensaje</label>
              <textarea name="Message" id="Message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
