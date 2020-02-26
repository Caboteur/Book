import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.css'
import logo from '../images/logoBeige.svg'
import logoLN from '../images/logoLNBeige.svg'
import messenger from '../images/messengerBeige.svg';
import Store from "./store.js"
import {inject, observer} from 'mobx-react';
import mobx from "mobx";


@observer
class Navigation extends React.Component {

  constructor(){
    super();
    this.state= {
      stroke:"line-through",
      point:"realisation",
      active:"false",
      face:"none",
    }
  }



  handleClick(e) {
    Store.loading="inherit";
    console.log(Store.loading)
    this.setState({
             point: e.target.name,
             face: "none"
          });
   setTimeout(function(){Store.loaded(); }, 2300);
  }

  handleClickMobile() {
    if(this.state.face === "none"){
      this.setState({
               face: "inherit"
            });
       Store.Mouse();
    }else{
      this.setState({
               face: "none"
            });
             Store.Mouse();
    }
  }


    handleClickEn(e) {
     Store.changeLangue("En")

    }

    handleClickFr(e) {
         Store.changeLangue("Fr")
    }



  render() {

    let styleActive = {
      background: "white",
      color: "#0e2b4d",
      padding: "6px",
    }

    let styleNonActive = {
      background: "#0e2b4d",
      color: "white",
    }




    return (
      <nav role="navigation">

        <ul className="navigation">
    <div ></div>

     <div style={{width:"100%", textAlign: "center", marginLeft: "20px",
  marginRight:"20px"}}>

        <Link  to="/" onClick={this.handleClick.bind(this)}>
           <img className="Mainlogo" to="/" src={logo} />
        </Link>


          <li  className="navigationItem"  >
            <Link name="realisation" className="navigationItemA" to="/blog/" onClick={this.handleClick.bind(this)} style={this.state.point == "realisation"? {textDecoration:"none", borderBottom: "2px solid #fffff"} : {textDecoration:"inherit"}}>
          {Store.languages=="En" ? (<a>Works</a>):(<a>Réalisations</a>)}
            </Link>
          </li>
          <span  className="navigationItem">
            <Link name="skills"  to="/blog/#Apropos"  onClick={this.handleClick.bind(this)} style={this.state.point == "skills"? {textDecoration:"none", borderBottom:"2px solid #fffff"} : {textDecoration:"inherit"}}>
          <a>About</a>
            </Link>
          </span>

          <div id="langg" name={this.state.langue} style={{color:"white"}} className="navigationItem point" >
             <a style={Store.languages=="En" ? (styleActive):(styleNonActive)} onClick={this.handleClickEn.bind(this)}>En</a>  <a style={Store.languages=="Fr" ? (styleActive):(styleNonActive)} className="point" onClick={this.handleClickFr.bind(this)}>Fr</a>
          </div>


     </div>


        </ul>




         <div className="navigation-mobile" style={{display:this.state.face}}>


           <span className="navigation-mobile-item">
             <Link  name="realisation" to="/blog/" onClick={this.handleClick.bind(this)} >Réalisations</Link>
           </span>
           <span  className="navigation-mobile-item">
        <Link className="glitch" name="skills" to="/blog/#Apropos"  onClick={this.handleClick.bind(this)} >À propos</Link>
           </span>
           <span id="langg" name={this.state.langue} style={{color:"white"}} className="navigation-mobile-item point" >
              <a  style={Store.languages=="En" ? (styleActive):(styleNonActive)} onClick={this.handleClickEn.bind(this)}>En</a>  <a style={Store.languages=="Fr" ? (styleActive):(styleNonActive)} onClick={this.handleClickFr.bind(this)}>Fr</a>
           </span>
          <div className="second-part"></div>

         </div>

         <svg className="ham hamRotate180 ham1" viewBox="0 0 100 100" width="80" onClick={this.handleClickMobile.bind(this)}>
         <path
       className="line top"
       d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
       <path
       className="line middle"
       d="m 30,50 h 30" />
       <path
       className="line bottom"
       d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg>


      </nav>
    )
  }
}

export default Navigation
