import React from 'react'
import { Link } from "react-router-dom";

export default function DetailBreadCrumb(props) {
    return (
        <div className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/store">Store</Link></li>
                <li className="is-active"><a href="#" aria-current="page">{props.title}</a></li>
            </ul>
        </div>
    )
}
