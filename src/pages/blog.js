import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.css'
import ArticlePreview from '../components/article-preview.js'
import ArticleContainer from '../components/article-container.js'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import Opening from '../components/opening'
import loading from '../images/loader.svg'
import typew from '../images/typew.svg'
import character from '../images/character.svg'
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
import logoLN from '../images/logoLNBeige.svg'
import messenger from '../images/messengerBeige.svg'
import Maps from '../components/maps.js'
import {langues} from '../components/navigation.js'
import {inject, observer} from 'mobx-react';
import mobx from "mobx";
import Store from '../components/store.js'
import { navigate } from "@reach/router"


@observer
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

      this.setState({View:this.state.MyList[val-1].node.title});
      this.setState({imgDes:this.state.MyList[val-1].node.imgDescription[0].file.url});
      this.setState({imgDes2:this.state.MyList[val-1].node.imgDescription[1].file.url});
      this.setState({Object:this.state.MyList[val-1].node.firstdescription.content[0].content[0].value});
      this.setState({ObjectEn:this.state.MyList[val-1].node.firstDescriptionEn.content[0].content[0].value});
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


                 var img = new Image();
                 let Ratio = "50%";
               img.onload = function() {
               if(this.width > this.height){
                 Ratio = "50%";
               }else{
                  Ratio = "90%";
               }
               }
               img.src = card.node.heroImage.file.url;


                return(<div className="contain-card">
                <Pulse>
                  <div  id={x} className="card"  style={{backgroundImage: 'url(' + card.node.heroImage.file.url + ')'}}>
                  <div id={x} className="card-container" onClick={this.handleChange.bind(this)}><h1 id={x} className="heading heading--stroke heading--shadow" onClick={this.handleChange.bind(this)}>{card.node.title}</h1></div>
                  </div>
                  </Pulse>

                   <Opening ratio={Ratio} link={this.state.link} open={this.state.open} tile={this.state.View} para={Store.languages=="Fr"? (this.state.Object) : (this.state.ObjectEn)} click={this.ChangeState.bind(this)} img={this.state.imgDes} img1={this.state.imgDes2} />


                  </div>
              )}
                      )}


        </div>

         <div id="Apropos" >
         {Store.languages=="En" ? (
           <h2 className="copyright">About</h2>
         ) : (<h2 className="copyright">À propos</h2>)}
         <RubberBand>
         <img  src={character} />
         </RubberBand>
         <Fade left>
         {Store.languages=="Fr" ? (<p className="copyright">J'aime imaginer, concevoir et développer des réalisations digitales qui permettent de part leur identité visuelle et leur interactivité de se démarquer sur la grande toile. Que ça soit des visualisations en 3d ou du machine learning, j'aime mettre en oeuvre les technologies les plus récentes pour créer un produit digital innovant.</p>
)
         :(<p className="copyright">I like to imagine, design and develop digital creations that allow their visual identity and interactivity to stand out on the big canvas. Whether it's 3D visualizations or machine learning, I like to use the most recent technologies to create an innovative digital product.</p>)}

         </Fade>
         {Store.languages=="En" ? (
          <h1 className="copyright">Skills</h1>) :
           (  <h1 className="copyright">Technologies</h1>)}
         <Fade right>
         {Store.languages=="En" ? (
            <p className="copyright">React js/ React Native Expo / Three js / Ml5js / Api rest /  P5js / Firebase / Node js  and everything related to javascript</p>
) :
           (<p className="copyright">React js/ React Native Expo / Three js / Ml5js / Api rest /  P5js / Firebase / Node js et tout ce qui touche de près ou de loin au javascript</p>
)}


         </Fade>
         </div>
           {Store.languages=="En" ? (
            <h1 className="copyright location">Where to find me?</h1>) :
             (   <h1 className="copyright location">Où me trouver?</h1>)}
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
        firstDescriptionEn{
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
