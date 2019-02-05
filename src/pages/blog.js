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
    this.setState({View:posts[this.state.Count].node.title});
    this.setState({Img:posts[this.state.Count].node.heroImage.file.url});
    this.setState({imgDes:posts[this.state.Count].node.imgDescription[0].file.url});
    this.setState({imgDes2:posts[this.state.Count].node.imgDescription[1].file.url});
    this.setState({Object:posts[this.state.Count].node.firstdescription.content[0].content[0].value})
    this.setState({link:posts[this.state.Count].node.lien})
    setTimeout(()=> this.setState({display: "none", Display: "inherit" }), 500)
        }

  MoreProject(){
    const TotalNum = this.state.MyList.length
    if (this.state.Count < 6 ) {
    this.setState({display: "inherit", Display: "none" });
    setTimeout(()=> this.setState({display: "none", Display: "inherit" }), 1700)
    this.setState({Count: this.state.Count + 1});
    this.setState({Img:this.state.MyList[this.state.Count + 1].node.heroImage.file.url});
    this.setState({View:this.state.MyList[this.state.Count + 1].node.title});
    this.setState({imgDes:this.state.MyList[this.state.Count + 1].node.imgDescription[0].file.url});
    this.setState({imgDes2:this.state.MyList[this.state.Count + 1].node.imgDescription[1].file.url});
    this.setState({Object:this.state.MyList[this.state.Count + 1].node.firstdescription.content[0].content[0].value})
    this.setState({link:this.state.MyList[this.state.Count + 1].node.lien})

    }
  }

  LessProject(){

    if (this.state.Count > 0) {
      this.setState({Count: this.state.Count - 1});
      this.setState({Img:this.state.MyList[this.state.Count - 1].node.heroImage.file.url});
      this.setState({View:this.state.MyList[this.state.Count - 1].node.title});
      this.setState({imgDes:this.state.MyList[this.state.Count -1 ].node.imgDescription[0].file.url});
      this.setState({imgDes2:this.state.MyList[this.state.Count -1 ].node.imgDescription[1].file.url});
      this.setState({Object:this.state.MyList[this.state.Count - 1].node.firstdescription.content[0].content[0].value})
      this.setState({link:this.state.MyList[this.state.Count - 1].node.lien})

    }


  }

  ChangeState(){
    this.setState({open:"none"})
  }

  OpenState(){
    this.setState({open:"inherit"})
    console.log(this.state.link)

  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    console.log(this.state.imgDes)
    return (
      <div>

      <div id="loader" style={{display:this.state.display, height:"20vh", width:"100%",background:"#112b4d", zIndex: 1}}>
      <img  src={loading} style={{ margin:"auto", display:this.state.display, position: "absolute", top:"25%", right: "0px", left: "0px"}} alt="loading..." />
      </div>

       <Opening value={this.state.Count} link={this.state.link} open={this.state.open} tile={this.state.View} para={this.state.Object} click={this.ChangeState.bind(this)} img={this.state.imgDes} img1={this.state.imgDes2} />

        <Helmet className="Helmet-title" title={siteTitle} />

        <img src={arrow} className="lessButton" onClick={this.LessProject.bind(this)}/>

        <div style={{display:this.state.Display}} className="page-blog-wrapper" onClick={this.OpenState.bind(this)}>

        <ArticleContainer  name={this.state.View} counting={this.state.Count} title={this.state.Object} image={this.state.Img} />

        </div>


        <img src={arrow} className="plusButton" onClick={this.MoreProject.bind(this)} />



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
