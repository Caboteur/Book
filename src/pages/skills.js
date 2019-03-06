import React from 'react'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import metromap from '../images/metromap2.svg'
import styled from './skills.css'
import ReactBodymovin from 'react-bodymovin'
import animation from '../images/animmap.json'

class Skills extends React.Component {


  render() {


    const bodymovinOptions = {
    loop: false,
    autoplay: true,
    prerender: true,
    animationData: animation
  }


    return (
    <div className="container-bod-skills">
         <ReactBodymovin options={bodymovinOptions} />
    </div>
    )
  }
}

export default Skills
