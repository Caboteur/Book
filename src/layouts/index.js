import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation.js'
import Opening from '../components/opening'
import styled from 'styled-components'
import logoLN from '../images/logoLN.svg'
import messenger from '../images/messenger.svg'
import wave from '../images/wave.svg'
import {Helmet} from "react-helmet";

const Background = styled.div`
   width: 100%;
   height:100vh;
   background:#112b4d;
   position: absolute;
   top: 50%; left: 50%;
   transform: translate(-50%, -50%);
`;

class Template extends React.Component {


  render() {
    const { location, children } = this.props
    let header




    return (
      <div>


      <Helmet>
          <meta charSet="utf-8" />
          <title>Adrien Blanchot</title>
          <link rel="icon"  href="./windowLogo.png" />
          <meta name="description" content="Portfolio d'Adrien Blanchot, developpeur et designer interractif." />
          <meta name="theme-color" content="#112b4d" />
      </Helmet>

          <Navigation />
          <span></span>

            <div className="background">

            {children()}

              <a href="https://www.linkedin.com/in/adrien-blanchot-24825487"><img className='logoLN' src={logoLN} /></a>
              <a href="https://m.me/Ad-Blanchot"> <img  className='logoMessenger' src={messenger} /> </a>
            </div>





      </div>
    )
  }
}

export default Template
