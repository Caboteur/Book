import React from 'react'
import get from 'lodash/get'
import ArticlePreview from '../components/article-preview'
import Motion from '../images/motion-web.svg'
import Motionn from '../images/backk.jpg';
import ReactBodymovin from 'react-bodymovin'
import animation from '../images/animation.json'
import { navigate } from "@reach/router"
import {Helmet} from "react-helmet";

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

      <div style={{display: this.state.display}}>  <ReactBodymovin options={bodymovinOptions} /> </div>
      <div className="typewriter">
            <h1>Bienvenue sur mon portfolio, je suis développeur et designer interactif</h1>
            </div>
         <img className="img-wrapper" src={Motionn} />

    </div>
    )
  }
}

export default RootIndex
