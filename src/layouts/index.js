import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation.js'
import Opening from '../components/opening'
import styled from 'styled-components'
import logoLN from '../images/logoLNBeige.svg'
import messenger from '../images/messengerBeige.svg'
import wave from '../images/wave.svg'
import {Helmet} from "react-helmet";
import cubeL from '../images/cubeL.png'

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
          <title>Adrien Blanchot  - Portfolio - développeur et designer web</title>
          <link rel="icon"  href="./windowLogo.png" />
          <html lang="fr" />
          <meta name="description" content="Portfolio d'Adrien Blanchot: creative développeur et designer freelance" />
          <meta name="theme-color" content="#112b4d" />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
          <meta property="og:image" content="https://images.ctfassets.net/xtml4dwibgxh/6pKigRQSUoGKWIogso6og/ee3b864ecc51d11d83e2351525602bf6/cubeL.png?h=250"/>
          <meta name="twitter:image" content="https://images.ctfassets.net/xtml4dwibgxh/6pKigRQSUoGKWIogso6og/ee3b864ecc51d11d83e2351525602bf6/cubeL.png?h=250"/>
          <meta name="google-site-verification" content="_pKFsMSAaiTo-LIUXH1amlbfwhs3xTvQwresCtaCkXg" />
          <link rel="sitemap" type="application/xml" title="Sitemap" href="./sitemap.xml" />
      </Helmet>

          <Navigation />
          <span></span>

            <div className="background">

            {children()}

            </div>

            <div className="bottom-foot">adblanchot@gmail.com</div>
            <div className="container-logo-bottom">

            <a href="https://www.linkedin.com/in/adrien-blanchot-24825487"><img className='logoLN' src={logoLN} /></a>
            <a href="https://m.me/Ad-Blanchot"> <img  className='logoMessenger' src={messenger} /> </a>

          </div>


      </div>
    )
  }
}

export default Template
