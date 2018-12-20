import React from 'react'
import styled from 'styled-components'
import styles from './article-container.css'
import Pic from '../images/ArticlePhoto.svg'

export default class RootIndex extends React.Component {



  render() {

    console.log(this.props.title)

    return (
      <div name={this.props.num}>

         {this.props.name === "Les Saisons" || this.props.name === "Les Saisons" ?
          (
     <video src={this.props.image} style={{cursor: "pointer" , boxShadow: "rgb(255, 255, 255) 0px -1px 20px 3px", height: "40vh", width:"78%", margin: "auto", display: "block", marginTop:"20%"}} title={this.props.title} type="video/mov" preload controls />
    ) : (
      <img className="img-container" src={this.props.image} />
    )}

         <h1 className="title">{this.props.name}</h1>

      </div>
    )
  }
}
