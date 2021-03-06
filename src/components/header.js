import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from 'styled-components';


const HeaderStyle = styles.header`
  background: #99337d;
  marginBottom: 1.45rem;
`;
  
const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
