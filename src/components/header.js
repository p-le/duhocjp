import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="blog-header py-3">
  <div className="row flex-nowrap justify-content-between align-items-center">
    <div className="col-8 text-left">
      <Link className="blog-header-logo text-dark" to="/">{ siteTitle }</Link>
    </div>
    <div className="col-4 d-flex justify-content-end align-items-center">
      <a className="btn btn-sm btn-outline-secondary" href="#">Đăng Ký</a>
    </div>
  </div>
</header>
)

export default Header
