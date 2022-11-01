
import React from "react";
import { matchPath, Link, useLocation } from "react-router-dom";
import { Links, Logo, Link as NavLink, Wrapper, LastLink } from "./style";

export default function() {

    let location = useLocation();

    const ifMatch = (route: string) => {
        console.log(location)
        return location.pathname == route;
    }

    return (
        <Wrapper>
            <Logo>Mauro Baladés</Logo>
            <Links>
                <NavLink>
                    <Link
                        to="/"
                        className={ifMatch("/") ? "active" : ""}
                    >
                        Home
                    </Link>
                </NavLink>
                <NavLink>
                    <Link
                        to="/blog"
                        className={ifMatch("/blog") ? "active" : ""}
                    >
                        Blog
                    </Link>
                </NavLink>
                <NavLink>
                    <Link
                        to="/projects"
                        className={ifMatch("/projects") ? "active" : ""}
                    >
                        Projects
                    </Link>
                </NavLink>
                <NavLink>
                    <Link
                        to="/contact"
                        className={ifMatch("/contact") ? "active" : ""}
                    >
                        Contact
                    </Link>
                </NavLink>
            </Links>
            <LastLink>
                <span>
                    Interactive Website
                </span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </LastLink>
        </Wrapper>
    )
}
