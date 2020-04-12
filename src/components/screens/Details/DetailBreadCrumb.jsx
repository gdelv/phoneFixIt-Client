import React from 'react'
import { Link } from "react-router-dom";

export default function DetailBreadCrumb(props) {
    return (
        <div className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <Link to='/'>
                        <span class="icon is-small">
                            <i class="fas fa-home" aria-hidden="true"></i>
                        </span>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/store">
                        <span class="icon is-small">
                            <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                        </span>
                        <span>Store</span>
                    </Link>
                </li>
                <li className="is-active">
                    <a href="#" aria-current="page">{props.title}</a>
                </li>
            </ul>
        </div>
    )
}
