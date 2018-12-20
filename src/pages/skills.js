import React from 'react'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import metromap from '../images/metromap.svg'
import styled from './skills.css'

class Skills extends React.Component {


  render() {


    return (
    <div>
         <img className="skills-wrapper" src={metromap} />
    </div>
    )
  }
}

export default Skills
