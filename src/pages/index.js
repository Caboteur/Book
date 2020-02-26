  import React from 'react'
  import get from 'lodash/get'
  import Helmet from 'react-helmet'
  import animation from '../images/animation.json'
  import Blog from './blog.js'
  import Fade from 'react-reveal/Fade';
  import Anim from '../components/anim'
  import logoLN from '../images/logoLNBeige.svg'
  import messenger from '../images/messengerBeige.svg'
  import mouse from '../images/mouse.svg';
  import {inject, observer} from 'mobx-react';
  import mobx from "mobx";
  import Store from '../components/store.js'
  import { navigate } from "@reach/router"
  import  Loader from '../components/loader.js'

  @observer
  class RootIndex extends React.Component {
    constructor(){
      super();
      this.state= {
        display:Store.loading,
      }
    }



    render() {

      return (


      <div>
       <div style={{display: Store.loading}}>
       <div className="container-bod"><Loader />
       </div>
       </div>
      <div className="typewriter">



       {Store.languages === "Fr" ? (
        <h1>Bienvenue sur mon portfolio, je suis un développeur web et designer interactif.</h1>
      ) : (
      <h1>Welcome to my portfolio, I am a web developer and an interactive designer.</h1>
      )}


            </div>
            <img className="mouseImage" style={{display:Store.display}} src={mouse} />
          <Anim />
          <a href="https://www.linkedin.com/in/adrien-blanchot-24825487"><img className='logoLN' src={logoLN} /></a>
          <div className="bottom-foot">adblanchot@gmail.com</div>
          <a href="https://m.me/Ad-Blanchot"> <img  className='logoMessenger' src={messenger} /> </a>
      </div>

      )
    }
  }

  export default RootIndex
