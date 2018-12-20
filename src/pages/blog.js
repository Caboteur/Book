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
    }
  }



componentDidMount(){
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    console.log(posts)
    this.setState({MyList:posts});
    this.setState({View:posts[this.state.Count].node.title});
    this.setState({Img:posts[this.state.Count].node.heroImage.file.url});
    this.setState({imgDes:posts[this.state.Count].node.imgDescription[0].file.url});
    this.setState({imgDes2:posts[this.state.Count].node.imgDescription[1].file.url});
    this.setState({Object:posts[this.state.Count].node.description.childMarkdownRemark.html})
        }

  MoreProject(){
    const TotalNum = this.state.MyList.length
    if (this.state.Count < 4 ) {
      console.log(this.state.Count)
    this.setState({Count: this.state.Count + 1});
    this.setState({Img:this.state.MyList[this.state.Count + 1].node.heroImage.file.url});
    this.setState({View:this.state.MyList[this.state.Count + 1].node.title});
    this.setState({imgDes:this.state.MyList[this.state.Count + 1].node.imgDescription[0].file.url});
    this.setState({imgDes2:this.state.MyList[this.state.Count + 1].node.imgDescription[1].file.url});
    this.setState({Object:this.state.MyList[this.state.Count + 1].node.description.childMarkdownRemark.html})
    }
  }

  LessProject(){

    if (this.state.Count > 0) {
      console.log(this.state.Count - 1);
      this.setState({Count: this.state.Count - 1});
      this.setState({Img:this.state.MyList[this.state.Count - 1].node.heroImage.file.url});
      this.setState({View:this.state.MyList[this.state.Count - 1].node.title});
      this.setState({imgDes:this.state.MyList[this.state.Count -1 ].node.imgDescription[0].file.url});
      this.setState({imgDes2:this.state.MyList[this.state.Count -1 ].node.imgDescription[1].file.url});
      this.setState({Object:this.state.MyList[this.state.Count - 1].node.description.childMarkdownRemark.html})
    }
  }

  ChangeState(){
    this.setState({open:"none"})
  }

  OpenState(){
    this.setState({open:"inherit"})
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    console.log(this.state.imgDes)
    return (
      <div>

       <Opening value={this.state.Count} open={this.state.open} tile={this.state.View} para={this.state.Object} click={this.ChangeState.bind(this)} img={this.state.imgDes} img1={this.state.imgDes2} />

        <Helmet className="Helmet-title" title={siteTitle} />

        <img src={arrow} className="lessButton" onClick={this.LessProject.bind(this)}/>

        <div className="page-blog-wrapper" onClick={this.OpenState.bind(this)}>

        <ArticleContainer name={this.state.View} title={this.state.Object} image={this.state.Img} />

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
          imgDescription
              {
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
