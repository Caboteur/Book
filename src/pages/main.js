import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Motion from '../images/motion-web.svg'
import Motionn from '../images/bakkk.jpg'
import ReactBodymovin from 'react-bodymovin'
import animation from '../images/animation.json'
import main from './main.css'
import Blog from './blog.js'

class RootIndex extends React.Component {


  render() {


    return (
    <div>
    <div className="typewriter">
          <h1>Bienvenue sur mon portfolio, je suis un creative développeur.</h1>
          </div>
         <img className="img-wrapper" src={Motionn} />
        
    </div>
    )
  }
}

export default RootIndex
