import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div class="Header">
    <div class="HeaderGroup">
      <Link to="/">
        <img src={require("../images/logo-designcode.svg")} width="30" />
      </Link>
      <Link to="/Pictures">Pictures</Link>
      <Link to="/UX">UX</Link>
      <Link to="/UI Design">UI Design</Link>
      {/* <Link to="/Web Design">Web design</Link> */}
      <Link to="/Contact">
        <button>Contact</button>
      </Link>
    </div>
  </div>
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
