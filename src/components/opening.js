import React from 'react'
import styled from 'styled-components'
import styles from './opening.css'
import ImageZoom from 'react-medium-image-zoom'
import Store from '../components/store.js'
import {inject, observer} from 'mobx-react';
import mobx from "mobx";


const Introduction = styled.div`
   width: 60%;
   height:100vh;
   background:white;
   position: fixed;
   right:0;
   top:0;
`;

const Close = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
`;

const Apptitle = styled.h1`
 text-align:center;
 color:#112b4d;
 font-size: 22px;
 margin-right: 31px;
 `;



 @observer
export default class Opening extends React.Component {
  constructor(){
    super();
    this.state= {
      Wid:"50%",
      imageStatus:"loading",
      show:"none"
    }
  }



  handleImageLoaded() {
    
   this.setState({ imageStatus: "loaded", show:"inherit" });

 }

 handleImageErrored() {
   this.setState({ imageStatus: "failed to load" });
     console.log(this.state.imageStatus)
 }


  render() {

    const style = {
      display: this.props.open
    }




    return (
      <Introduction value={this.props.value} id="opening-introduction" style={style}>
        <div className="border">
       <Close className="close" onClick={this.props.click}></Close>
       <Apptitle style={{color:"#fff1e0"}}>{this.props.tile}</Apptitle>


        <div className="div-para">{this.props.para}</div>
        {this.props.tile === "Fler Culture" ?
         (<div>
        <img style={{width: "90%"}} className="img-opening"  onLoad={this.handleImageLoaded.bind(this)} src={this.props.img} />
        <img style={{width: "90%"}} className="img-opening"  onLoad={this.handleImageLoaded.bind(this)} src={this.props.img1} />

        {Store.languages=="En" ? (
            <a href={this.props.link}><div className="button-link" href={this.props.link}>Link</div></a>
        ) : (  <a href={this.props.link}><div className="button-link" href={this.props.link}>Lien</div></a>)}

        </div>
      ):  this.props.tile === "Les Saisons" ?(<div>
        <img style={{display:'none'}}  />
        <img style={{display:'none'}}  />
        </div>) :

        this.props.tile === "Consilium" ?
        (<div>
          <img style={{width: "90%"}} className="img-opening" src={this.props.img} />
          <img style={{display:'none'}}  />
          {Store.languages=="En" ? (
              <a href={this.props.link}><div className="button-link" href={this.props.link}>Link</div></a>
          ) : (  <a href={this.props.link}><div className="button-link" href={this.props.link}>Lien</div></a>)}

          </div>
        ) :

        (
          <div>
            <img style={{width: this.props.ratio}} className="img-opening" onLoad={this.handleImageLoaded.bind(this)} src={this.props.img} />
            <img style={{width: this.props.ratio}} className="img-opening" onLoad={this.handleImageLoaded.bind(this)} src={this.props.img1} />
            {Store.languages=="En" ? (
                <a href={this.props.link}><div className="button-link" href={this.props.link}>Link</div></a>
            ) : (  <a href={this.props.link}><div className="button-link" href={this.props.link}>Lien</div></a>)}


            </div>
        )

    }


        </div>

      </Introduction>
    )
  }
}
