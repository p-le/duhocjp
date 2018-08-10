import React from 'react'

const Navigation = ({ siteNavItems }) => (
    <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
            {siteNavItems.map(item => <a className="p-2 text-muted" href="#">{ item }</a>)}
        </nav>
    </div>
)

export default Navigation
