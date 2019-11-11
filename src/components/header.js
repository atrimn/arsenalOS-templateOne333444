import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import stealthIcon from "../images/stealthistIcon.png"
import moreIcon from "../images/moreIcon.png"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2C2C2C`,
      // marginBottom: `1.45rem`,
    }}
  >
    <div className="flex justify-between items-center px-4 py-4">
      <img className="h-4" src={stealthIcon} alt="page icon" />
      <img className="h-3" src={moreIcon} alt="more icon" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
