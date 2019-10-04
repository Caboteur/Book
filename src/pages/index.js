import React from 'react'
import get from 'lodash/get'
import ArticlePreview from '../components/article-preview'
import Motion from '../images/motion-web.svg'
import Motionn from '../images/backk.jpg';
import ReactBodymovin from 'react-bodymovin'
import animation from '../images/animation.json'
import { navigate } from "@reach/router"
import {Helmet} from "react-helmet";
import Fade from 'react-reveal/Fade';
import Anim from '../components/anim';
import logoLN from '../images/logoLNBeige.svg'
import messenger from '../images/messengerBeige.svg'


class RootIndex extends React.Component {
  constructor(){
    super();
    this.state= {
      display:'inherit'
    }
  }

  componentDidMount(){
    setTimeout(()=>{const nav = () => navigate('/main');this.setState({display:'none'}) ; nav()}, 5200);
  }

  render() {

    const bodymovinOptions = {
    loop: false,
    autoplay: true,
    prerender: true,
    animationData: animation
  }



    return (
    <div>

      <div style={{display: this.state.display}}> <div className="container-bod"> <ReactBodymovin options={bodymovinOptions} /></div> </div>
      <div className="typewriter">
      <Fade top>
         <h1>Bienvenue sur mon portfolio, je suis un développeur web et designer interactif.</h1>
      </Fade>
            </div>
          <Anim />
          <a href="https://www.linkedin.com/in/adrien-blanchot-24825487"><img className='logoLN' src={logoLN} /></a>
           <a href="adblanchot@gmail.com"><div className="bottom-foot">adblanchot@gmail.com </div></a>

          <a href="https://m.me/Ad-Blanchot"> <img  className='logoMessenger' src={messenger} /> </a>
      </div>

    )
  }
}

export default RootIndex
