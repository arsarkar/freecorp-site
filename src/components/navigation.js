import React from "react"
import { Link } from "gatsby"
import typography, { rhythm, scale } from "../utils/typography"
import presets, { colors } from "../utils/presets"
import logo from "../logo.svg"
// import { OutboundLink } from "gatsby-plugin-google-analytics"
// import GithubIcon from "react-icons/lib/go/mark-github"
// import TwitterIcon from "react-icons/lib/fa/twitter"

const navItemStyles = {
    ...scale(-1 / 3),
    boxSizing: `border-box`,
    display: `inline-block`,
    color: `inherit`,
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
      css={{
        display: `inline-block`,
        margin: 0,
      }}
    >
      <Link to={linkTo} css={navItemStyles}>
        {children}
      </Link>
    </li>
  )

  export default () => {
    const isHomepage = true
    let styles = {}
    if (isHomepage) {
        styles.backgroundColor = `rgba(255,255,255,0)`
        styles.borderBottomColor = `transparent`
        styles[presets.Tablet] = {
          position: isHomepage || isBlog ? `absolute` : `fixed`,
        }
      }

    return (
        <div
      role="navigation"
      className="navigation"
      css={{
        borderBottom: `1px solid`,
        backgroundColor: `rgba(255,255,255,0.975)`,
        zIndex: `2`,
        left: 0,
        right: 0,
        ...styles,
      }}
    >
      <div
        css={{
          //maxWidth: rhythm(presets.maxWidth),
          margin: `0 auto`,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
          fontFamily: typography.options.headerFontFamily.join(`,`),
          display: `flex`,
          alignItems: `center`,
          width: `100%`,
          height: `100%`,
        }}
      >
        <Link
          to="/"
          css={{
            alignItems: `center`,
            color: `inherit`,
            display: `flex`,
            textDecoration: `none`,
            marginRight: rhythm(1 / 2),
          }}
        >
          <img
            src={logo}
            css={{
              width: 106,
              margin: 0,
            }}
            alt=""
          />
        </Link>
        <ul
          css={{
            display: `none`,
            [presets.Tablet]: {
              display: `flex`,
              margin: 0,
              padding: 0,
              listStyle: `none`,
              flexGrow: 1,
              overflowX: `auto`,
              maskImage: `linear-gradient(to right, transparent, white ${rhythm(
                1 / 8
              )}, white 98%, transparent)`,
            },
          }}
        >
          <NavItem linkTo="/docs/">Docs</NavItem>
          <NavItem linkTo="/tutorial/">Tutorial</NavItem>
          <NavItem linkTo="/plugins/">Plugins</NavItem>
          <NavItem linkTo="/features/">Features</NavItem>
          <NavItem linkTo="/blog/">Blog</NavItem>
          <NavItem linkTo="/showcase/">Showcase</NavItem>
        </ul>
        {/* <div
          css={{
            display: `flex`,
            marginLeft: `auto`,
          }}
        >
          <SearchForm
            key="SearchForm"
            iconStyles={{ ...socialIconsStyles }}
            isHomepage={isHomepage}
          />
          <OutboundLink
            href="https://github.com/gatsbyjs/gatsby"
            title="GitHub"
            css={{
              ...navItemStyles,
              ...socialIconsStyles,
            }}
          >
            <GithubIcon style={{ verticalAlign: `text-top` }} />
          </OutboundLink>
          <div
            css={{
              display: `none`,
              [presets.Desktop]: { display: !isHomepage && `inline-block` },
              [presets.Hd]: { display: `inline-block` },
            }}
          >
            <OutboundLink
              href="https://discord.gg/0ZcbPKXt5bVoxkfV"
              title="Discord"
              css={{
                ...navItemStyles,
                ...socialIconsStyles,
              }}
            >
              <DiscordIcon overrideCSS={{ verticalAlign: `text-top` }} />
            </OutboundLink>
            <OutboundLink
              href="https://twitter.com/gatsbyjs"
              title="@gatsbyjs"
              css={{
                ...navItemStyles,
                ...socialIconsStyles,
              }}
            >
              <TwitterIcon style={{ verticalAlign: `text-top` }} />
            </OutboundLink>
          </div>
          <OutboundLink
            href="https://www.gatsbyjs.com"
            title="gatsbyjs.com"
            css={{
              ...navItemStyles,
              ...socialIconsStyles,
              paddingRight: 0,
            }}
          >
            .com
          </OutboundLink>
        </div> */}
      </div>
    </div>
    )
  }