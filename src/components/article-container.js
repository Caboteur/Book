import React from 'react'
import styled from 'styled-components'
import styles from './article-container.css'
import Pic from '../images/ArticlePhoto.svg'

export default class RootIndex extends React.Component {



  render() {


    return (
      <div name={this.props.num}>

         {this.props.name === "Les Saisons"  ?
          (
     <video className="video-container" src={this.props.image} title={this.props.title} type="video/mov" preload controls />
    )  :  this.props.name === "Consilium" ?
    <img className="img-w-container" src={this.props.image} /> : (
      <img className="img-container" src={this.props.image} />
    )}

         <h1 className="title">{this.props.name}</h1>

      </div>
    )
  }
}
