import React from 'react'
import Link from 'gatsby-link'
//import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import presets from "../utils/presets"
import typography, { rhythm, scale } from "../utils/typography"
import ouLogo from "../imgs/ohioLogo_standard_fc_1.png"
import icmtLogo from "../imgs/Header2.png"

const navItemStyles = {
  ...scale(-1 / 3),
  boxSizing: `border-box`,
  display: `inline-block`,
  color: `white`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  letterSpacing: `0.03em`,
  padding: `6px ${rhythm(1 / 4)} 0 ${rhythm(1 / 2)}`,
  position: `relative`,
  top: 0,
  transition: `color .15s ease-out`,
  "&:hover": {
    opacity: 0.8,
  },
}

const NavItem = ({ linkTo, children }) => (
  <li
    style={{
      display: `inline-block`,
      margin: 0,
      boarder: '10px, solid, black'
    }}
  >
    <a href={linkTo} css={navItemStyles}>
      {children}
    </a>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '0rem',
      position: `-webkit-sticky`,    
      top: 0,
      position: `sticky`,
      width: `100%`,
      display: 'flex',
      background: `white`,
      // opacity: 1,
      flexDirection: 'column',
      //The z-index property specifies the overlay order of positioned elements.
      zIndex: 99,
    }}
  >
    {/* For logos */}
    <div style={{
      //display: 'flex',
      //justifyContent: 'center',
      //alignItems: 'center' 
    }}>
    <a href="https://www.ohio.edu/">
      <img
        src={ouLogo}
        style={{
          width: '12%',
          height: 50,
          float: 'left',
          marginTop: 5,
          marginLeft: 10,
        }}
        alt=""
      />
      </a>
      
      <a href="http://www.icmt.ohio.edu">
      <img
        src={icmtLogo}
        style={{
          display: 'inline-block',
          width: '22%',
          height: 60,
          margin: 'auto',
          marginLeft: '28%'

        }}
        alt=""
      />
      </a>

    </div>
    {/* For menu items */}
    <div
      style={{
        background: '#00694E',
        height: 40,
        margin: 0,
        //maxWidth: 'auto',
        padding: '0rem',
      }}
    >
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        </h1> */}

      <ul
        style={{
          //display: 'flex'
          marginLeft: '0.5rem',
        }}
      >
        <NavItem linkTo="/">Home</NavItem>
        <NavItem linkTo="http://www.icmt.ohio.edu/sponsors/">Sponsors</NavItem>
        <NavItem linkTo="http://www.icmt.ohio.edu/people/">People</NavItem>
        <NavItem linkTo="http://www.icmt.ohio.edu/projects/">Projects</NavItem>
        <NavItem linkTo="http://www.icmt.ohio.edu/facilities/">Facilities</NavItem>
        <NavItem linkTo="http://www.icmt.ohio.edu/publications/">Publications</NavItem>
        <NavItem linkTo="http://www.icmt.ohio.edu/software/">Software</NavItem>
        <NavItem linkTo="http://www.icmt.ohio.edu/technology/">Technology</NavItem>
        <NavItem linkTo="http://www.icmt.ohio.edu/naceou/index.asp">NACE-OU</NavItem>
        <NavItem linkTo="http://www.icmt.ohio.edu/about/">About Us</NavItem>
      </ul>

    </div>
  </div>
)
export default Header