import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Motion from '../images/motion-web.svg'
import Motionn from '../images/motion-web-3.svg'
import ReactBodymovin from 'react-bodymovin'
import animation from '../images/animation.json'
import main from './main.css'

class RootIndex extends React.Component {


  render() {


    return (
    <div>
    <div className="typewriter">
          <h1>Bonjour! Je m'appelle Adrien et je suis un developpeur et designer interractif.</h1>
          </div>
         <img className="img-wrapper" src={Motionn} />
    </div>
    )
  }
}

export default RootIndex
