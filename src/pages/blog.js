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
import Masonry from 'react-masonry-component';


class BlogIndex extends React.Component {
  constructor(){
    super();
    this.state= {
      MyList:[],
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
    console.log(this.state.MyList)
        }



  OpenState(){
    this.setState({open:"inherit"})
    console.log(this.state.link)

  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    console.log(this.state.imgDes)


    return (
      <div className="flexbox">



      { this.state.MyList.map((item)=>{

          console.log(item.node.title)


          if (item.node.title === "Les Saisons"){
            return(
                <div className="item">
              <video src={item.node.heroImage.file.url} type="video/mov" preload controls />
              </div>
            ) } else {
            return (
              <div className="item">

                <img src={item.node.heroImage.file.url}/>
                  </div>

          )
          }

       })

 }

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
