import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts"
import styles from "../styles"
import presets from "../utils/presets"
import { rhythm, scale } from "../utils/typography"
import freecorpLogo from "../imgs/Freecorp2-logo-large.png"

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    console.log(this.props)
    return (      
      <Layout location={this.props.location}>
        <div>
          <h1> FREECORP 2.0</h1>
          <img src={freecorpLogo} alt="FREECORP" width="300px" height="280px"></img>
          <p>
          <b>Given</b> the great popularity of FREECORP 1.0, which was launched in 2008, we are now releasing the second version, FREECORP™ 2.0, approximately a decade later. In the past 10 years, FREECORP 1.0 has been downloaded over 10,000 times by users from all over the world. This included students, professors, researchers, engineers, software developers and more. Since 2008, we have received feedback and suggestions from more than 250 users, ranging from corrosion industry experts to ambitious undergraduate students. FREECORP 1.0 has since been coupled and integrated with various other tools such as those for: multi-phase flow prediction, process design, computational fluid dynamics (CFD), etc. It is worth remembering that part of the success was related to the fact that FREECORP 1.0 was based on clear theoretical foundations, was fully transparent, it relied exclusively on information in the public domain and that the background behind the models was fully shared with the users. After ten years, we feel that we have realized our initial goal – to bring the best possible tool that can help understand and predict corrosion of mild steel in aqueous systems containing CO2, H2S, and organic acids, typical for oil and gas applications, to the broadest possible audience – and make it available – for free. 
          </p>

          <p>
          <b>This</b> is not to say that FREECORP 1.0 was without problems. Apart from the few bugs that were discovered and fixed early on, we realized through feedback provided by the users, that there are features that we could have implemented better and others that were missing altogether, that sparked new ideas and inspired us to continue working on them. Moreover, our understanding of the physicochemical phenomena underlying this type of corrosion has improved significantly over the past decade and we wanted to bring all that back to the FREECORP community. This has led us to development of FREECORP™ 2.0.
          </p>

          <p>
          <b>In</b> many ways, FREECORP™ 2.0 was built with the same goals and approach in mind as its predecessor. We still wanted to reach the broadest possible audience, offer them models based on best possible science, present the theoretical background as clearly and as competently as we can, verify the model performance with most accurate empirical data, deliver the models via software that is easy to use and flexible, and keep it all – free. Time ahead will tell if we were successful in this quest.  
          </p>

          <p>
          <b>It</b> is worth highlighting here some of main improvements over FREECORP 1.0. 
          </p>

          <ul>
            <li>the two main models covering electrochemical corrosion of mild steel due to aqueous CO2 and H2S are now seamlessly integrated with each other and the organic acid corrosion model;</li>
            <li>in addition to the steady-state electrochemical corrosion model featured in FREECORP 1.0, there is a fully mechanistic transient corrosion model in FREECORP™ 2.0 that covers formation and protection by corrosion product layers;</li>
            <li>the model for calculating water speciation was significantly improved;</li>
            <li>one can now use the new intuitive user interface or work with FREECORP™ 2.0 directly by connecting to it from other applications and programming environments. </li>
          </ul>

          <p>
          <b>We</b> hope that the new FREECORP™ 2.0 will be at least as useful and popular as its predecessor. Either way, we are fully committed to supporting it and making it even better in the years to come.
          </p>


        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
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
`
