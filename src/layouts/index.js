import React from "react"
import { BrowserRouter as Router, Route, Link as ReactLink } from "react-router-dom"
import { Link, StaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styles from "../styles"
import presets from "../utils/presets"
import "typeface-space-mono"
import "typeface-spectral"
import Header from '../components/header'
import Navigation from '../components/navigation'

import "prismjs/themes/prism-solarizedlight.css"
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 25px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover {
      background-color: #D9D7D4;
    }
    &:link, &:visited {
      width: 100%;
      color: #756e65;
      padding: 0;
      text-align: left; 
      text-decoration: none;
      display: inline-block;
    }
    &:active, &:visited  {
     
    }
`;



class Layout extends React.Component {
  render() {
    //const test = this.props.data.allMarkdownRemark.edges
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                author
                homepage
              }
            }  
            allMarkdownRemark(
              limit: 2000
              sort: { fields: [frontmatter___date], order: DESC }
              filter: { frontmatter: { draft: { ne: true }, example: { ne: true } } }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                  }
                }
              }
            }         
          }
        `}
        render={data => {
          const { author, homepage } = data.site.siteMetadata
          return (
            <div >
              <Header siteTitle={data.site.siteMetadata.title} />
              
              {/* <div {...styles.container} {...styles.verticalPadding} {...styles.fixedContainer}>
                <Link
                  to="/"
                  css={{
                    display: `inline-block`,
                    textDecoration: `none`,
                  }}
                >
                  <h1
                    css={{
                      ...scale(0),
                      color: styles.colors.light,
                      fontWeight: `normal`,
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    FREECORP
                  </h1>
                </Link>
              </div> */}
              <div {...styles.container} {...styles.verticalPadding}>
                
                <div {...styles.container}
                  css={{
                    //...scale(-0.5),
                    //color: styles.colors.light,              
                    display: 'flex'
                  }}
                >
                  <ul
                    css={{
                      //display: 'inline-block',
                      // marginTop: rhythm(3),
                      flex: 2,
                      position: `fixed`,
                      left: 0,
                      //border: '2px solid #e6e6e6',
                      //marginBottom: rhythm(2),
                      //marginTop: rhythm(2),
                      //top: rhythm(5),
                      height: `100%`,
                      marginLeft: `1rem`,
                      listStyle: `none`,
                      background: '#eee',
                    }}
                  >
                    {data.allMarkdownRemark.edges.map(post => (
                      <li key={'_' + post.node.fields.slug}
                      style={{
                        marginLeft: `0.5rem`,
                        marginRight: `1rem`,
                      }}
                      >
                        <span
                          css={{
                            color: styles.colors.light,
                            display: `block`,                           
                            [presets.Tablet]: {
                              float: `right`,
                              marginLeft: `1rem`,
                              // marginLeft:`1rem`,
                            },
                          }}
                        >
                        </span>
                        <StyledLink to={post.node.fields.slug}>
                          {post.node.frontmatter.title}
                        </StyledLink>
                      </li>
                    ))}
                    {/* <li>
                      <StyledLink to="/test/">
                        Test
                      </StyledLink>
                      <StyledLink to="/summary/">
                        Test2
                      </StyledLink>
                    </li> */}


                    

                  </ul>
                  


                  {/* powered by{` `}
                  <a target="_blank" rel="noopener noreferrer" href={homepage}>
                    {author}
                  </a> */}
                  <div {...styles.container}
                    css={{
                      //display: 'inline-block',
                      // marginTop: rhythm(3),
                      flex: 8,
                      marginLeft: rhythm(8),
                      // position: `-webkit-sticky`,
                      // position: `sticky`,
                      // top: 50,
                    }}
                  >
                    {this.props.children}
                  </div>
                </div>
                
              </div>
            </div>
          )
        }}
      />
    )
  }
}

export default Layout
