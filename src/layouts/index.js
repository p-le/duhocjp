import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Navigation from '../components/navigation'
import './index.css'

const Layout = ({ children, data }) => (
  <div className='container'>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { charset: 'utf-8' }
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css', integrity: 'sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4', crossorigin: 'anonymous'} 
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Navigation siteNavItems={data.site.siteMetadata.navItems}/>
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        navItems
      }
    }
  }
`
