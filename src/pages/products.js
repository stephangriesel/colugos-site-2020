import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import BackgroundSection from '../components/Globals/BackgroundSection';

// import Info from '../components/Home/Info'

import Menu from '../components/Home/Menu'


const ListProductsPage = ({ data }) => (
  <Layout>
    <SEO title="Products" />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Products"
      styleClass="about-background"
    /> */}
    <Menu items={data.menu} />
  </Layout >
);

export const query = graphql`
{
  img:file(relativePath:{
    eq:"default-bg.jpg"
  }){
    childImageSharp{
      fluid(quality:100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulPricelistProduct{
    edges{
      node{
        id
        title
        price
        category
        image {
          fixed(width:200,height:250){
            ...GatsbyContentfulFixed
          }
        }
        description 
      }
    }
  }
}
`

export default ListProductsPage
