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
import Fade from 'react-reveal/Fade';
import Scene from '../components/scene'
import Anim from '../components/anim'


class RootIndex extends React.Component {


  render() {


    return (
    <div>
    <div className="typewriter">
    <Fade top>
       <h1>Bienvenue sur mon portfolio, je suis un développeur web et designer interactif.</h1>
    </Fade>
          </div>
        <Anim />
    </div>
    )
  }
}

export default RootIndex
