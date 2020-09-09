import styles from "./NavBar.module.scss";
import {Link} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

const NavBar = ({posts}) => {
  const sortedPosts = posts.sort((a, b) => a.id > b.id ? 1: -1);
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbarMain}>
        <ul className={styles.navbarList}>
          {sortedPosts.map((post, index) => (
            post.showInNav && post.status === 'publish' ? (
              <li key={index}>
                <Link to={post.relativeRoute}
                      className={styles.navLink}>
                  {post.navTitle}
                </Link>
              </li>
            ) : null
          ))}
        </ul>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  posts: PropTypes.array,
}

export default NavBar;
