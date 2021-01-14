import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";


const Nav = ({ children, match }) => {
    const isActive = (path) => {
        if (match.path === path) {
            return { color: "green" };
        } else {
            return { color: "grey" };
        }
    };

    const nav = () => {
        return (
            <ul>
                <li className="nav-item">
                    <Link to="/" className="nav-link" style={isActive("/")}>
                        <span className="nav">
                            Home
                        </span>

                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        to="/admin"
                        className="nav-link"
                        style={isActive("/admin")}
                    >
                        <span className="nav">
                            Admin
                        </span>

                    </Link>
                </li>

            </ul>
        );
    };
    return (
        <Fragment>
            {nav()}
            <div className="container">{children}</div>
        </Fragment>
    );
};

export default withRouter(Nav);