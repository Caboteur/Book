import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.css'
import logo from '../images/logoBeige.svg'
import logoLN from '../images/logoLNBeige.svg'
import messenger from '../images/messengerBeige.svg'

class Navigation extends React.Component {

  constructor(){
    super();
    this.state= {
      stroke:"line-through",
      point:"realisation",
      active:"false",
      face:"none"
    }
  }

  handleClick(e) {
    this.setState({
             point: e.target.name,
             face: "none"
          });

  }

  handleClickMobile() {
    if(this.state.face === "none"){
      this.setState({
               face: "inherit"
            });

    }else{
      this.setState({
               face: "none"
            });

    }

  }

  render() {





    return (
      <nav role="navigation">
      <Link  to="/main" onClick={this.handleClick.bind(this)}>
         <img className="Mainlogo" to="/main" src={logo} />
         </Link>
        <ul className="navigation">

          <li  className="navigationItem"  >
            <Link name="realisation" to="/blog/" onClick={this.handleClick.bind(this)} style={this.state.point == "realisation"? {textDecoration:"none", borderBottom: "2px solid #fff1e0"} : {textDecoration:"none"}}>Réalisations</Link>
          </li>
          <li className="navigationItem" >
            <Link name="skills" to="/skills" onClick={this.handleClick.bind(this)} style={this.state.point == "skills"? {textDecoration:"none", borderBottom: "2px solid #fff1e0"} : {textDecoration:"none"}}>Skills</Link>
          </li>
          <li className="navigationItem" >
            <Link name="contact" to="/contact/" onClick={this.handleClick.bind(this)} style={this.state.point == "contact"? {textDecoration:"none", borderBottom: "2px solid #fff1e0"} : {textDecoration:"none"}}>Contact</Link>
          </li>


        </ul>



         <div className="navigation-mobile" style={{display:this.state.face}}>


           <span className="navigation-mobile-item">
             <Link  name="realisation" to="/blog/" onClick={this.handleClick.bind(this)} style={this.state.point == "realisation"? {textDecoration:"none", borderBottom: "2px solid rgb(240, 205, 56)"} : {textDecoration:"line-through"}}>Réalisations</Link>
           </span>
           <span  className="navigation-mobile-item">
             <Link name="skills" to="/skills" onClick={this.handleClick.bind(this)} style={this.state.point == "skills"? {textDecoration:"none", borderBottom: "2px solid rgb(240, 205, 56)"} : {textDecoration:"line-through"}}>Skills</Link>
           </span>
           <span  className="navigation-mobile-item">
             <Link name="contact" to="/contact/" onClick={this.handleClick.bind(this)} style={this.state.point == "contact"? {textDecoration:"none", borderBottom: "2px solid rgb(240, 205, 56)"} : {textDecoration:"line-through"}}>Contact</Link>
           </span>

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
