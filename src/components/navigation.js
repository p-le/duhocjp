import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
    <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
            <Link className="p-2 text-muted" to="/intro"> Giới Thiệu </Link>
            <Link className="p-2 text-muted" to="/faq"> Hỏi Đáp </Link>
        </nav>
    </div>
)

export default Navigation
