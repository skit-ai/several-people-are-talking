import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRssSquare } from "@fortawesome/free-solid-svg-icons";


const Header = ({ siteTitle }) => {
    let rssUrl;
    if (typeof window !== "undefined") {
        rssUrl = `${window.location.href}rss.xml`;
        console.log(rssUrl);
    }
    return (<header
         style={{
             marginBottom: `1.45rem`,
         }}
       >
         <div
           style={{
               margin: `0 auto`,
               maxWidth: 960,
           }}
         >
           <h1 style={{ margin: 0 }}>
             <Link
               to="/"
               style={{
                   color: `black`,
                   textDecoration: `none`,
               }}
             >
               {siteTitle}
             </Link>
             <a
               href={rssUrl}
               title="subscribe to rss"
               alt="subscribe to rss"
               className="orange-bg">
               &nbsp;<FontAwesomeIcon icon={faRssSquare}/>
             </a>
           </h1>
         </div>
       </header>);
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
