import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.css'
import ArticlePreview from '../components/article-preview.js'
import ArticleContainer from '../components/article-container.js'
import Skills from './skills.js'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import Opening from '../components/opening'
import loading from '../images/loader.svg'
import typew from '../images/typew.svg'
import character from '../images/character.svg'
import Fade from 'react-reveal/Fade';
import logoLN from '../images/logoLNBeige.svg'
import messenger from '../images/messengerBeige.svg'
import Maps from '../components/maps.js'

class BlogIndex extends React.Component {
  constructor(){
    super();
    this.state= {
      MyList:[],
      Val:"",
      Count:0,
      View:"Projet",
      color:"green",
      open:"none",
      Img:"",
      Object:"",
      imgDes:"https://www.combourg.com/images/vue-appli-avec-main.png",
      imgDes2:"https://www.combourg.com/images/vue-appli-avec-main.png",
      link:"https://github.com/Caboteur/zone",
      display:"inherit",
      Display:"none",
    }
  }



componentDidMount(){
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    this.setState({MyList:posts});
        }





  ChangeState(){
    if(this.state.open != "none"){this.setState({open:"none"})}
  }

   handleChange(event){


      const val = event.target.id;
       console.log(val)
      this.setState({View:this.state.MyList[val-1].node.title});
      this.setState({imgDes:this.state.MyList[val-1].node.imgDescription[0].file.url});
      this.setState({imgDes2:this.state.MyList[val-1].node.imgDescription[1].file.url});
      this.setState({Object:this.state.MyList[val-1].node.firstdescription.content[0].content[0].value})
      this.setState({link:this.state.MyList[val-1].node.lien})
      this.setState({open:"inherit"});


  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

     let x = 0;

    return (
      <div onClick={this.ChangeState.bind(this)}>

       <img src={typew}  className="typew"/>

        <Helmet className="Helmet-title" title={siteTitle} />



            <div className="main-gallery">

              {this.state.MyList.map((card) => {

               x = x+1;


                return(<div className="contain-card">

                  <Fade top>
                  <div  id={x} className="card"  style={{backgroundImage: 'url(' + card.node.heroImage.file.url + ')'}}>
                  <div id={x} className="card-container" onClick={this.handleChange.bind(this)}><h1 id={x} className="heading heading--stroke heading--shadow" onClick={this.handleChange.bind(this)}>{card.node.title}</h1></div>
                  </div>
                  </Fade>

                   <Opening  link={this.state.link} open={this.state.open} tile={this.state.View} para={this.state.Object} click={this.ChangeState.bind(this)} img={this.state.imgDes} img1={this.state.imgDes2} />


                  </div>
              )}
                      )}


        </div>

         <div id="Apropos" >
         <h2 className="copyright">À propos</h2>
         <img  src={character} />
         <p className="copyright">J'aime imaginer, concevoir et développer des réalisations digitales qui permettent de part leur identité visuelle et leur interactivité de se démarquer sur la grande toile. Que ça soit des visualisations en 3d ou du machine learning, j'aime mettre en oeuvre les technologies les plus récentes pour créer un produit digital innovant.</p>
         <h1 className="copyright">Technologies</h1>
         <p className="copyright">React js/ React Native Expo / Three js / Ml5js / P5js / Firebase / Node js et tout ce qui touche de près ou de loin au javascript</p>
         </div>

        <h1 className="copyright location">Où me trouver?</h1>
        <Maps />

        <div className="footer-div">
        <div className="copyright">adrienblanchot©</div>
        <div className="copyright">adblanchot@gmail.com</div>
        <a href="https://www.linkedin.com/in/adrien-blanchot-24825487"><img className='logoLN-footer' src={logoLN} /></a>
        <a href="https://m.me/Ad-Blanchot"> <img  className='logoMessenger-footer' src={messenger} /> </a>
        </div>

      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query BlogIndexQuery {
  allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
    edges {
      node {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        imgDescription {
          id
          file {
            url
            fileName
            contentType
          }
        }
        heroImage {
        file {
          url
          fileName
          contentType
        }
        }
        firstdescription {
          nodeType
          content {
            nodeType
            content{
              value
            }
          }
        }
        lien
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
  }
`
