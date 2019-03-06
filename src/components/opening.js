import React from 'react'
import styled from 'styled-components'
import styles from './opening.css'


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
 `;

export default class Opening extends React.Component {
  constructor(){
    super();
    this.state= {
      Wid:"50%",
    }
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
        <img style={{width: "90%"}} className="img-opening" src={this.props.img} />
        <img style={{width: "90%"}} className="img-opening" src={this.props.img1} />
        <a href={this.props.link}><div className="button-link" href={this.props.link}>Lien</div></a>

        </div>
      ):  this.props.tile === "Les Saisons" ?(<div>
        <img style={{display:'none'}}  />
        <img style={{display:'none'}}  />
        </div>) :

        this.props.tile === "Consilium" ?
        (<div>
          <img style={{width: "90%"}} className="img-opening" src={this.props.img} />
          <img style={{display:'none'}}  />
          <a href={this.props.link}><div className="button-link" href={this.props.link}>Lien</div></a>

          </div>
        ) :

        (
          <div>
            <img style={{width: this.state.Wid}} className="img-opening" src={this.props.img} />
            <img style={{width: this.state.Wid}} className="img-opening" src={this.props.img1} />
            <a href={this.props.link}><div className="button-link" href={this.props.link}>Lien</div></a>

            </div>
        )

    }


        </div>

      </Introduction>
    )
  }
}
