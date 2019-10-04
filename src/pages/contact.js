import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Motion from '../images/motion-web.svg'
import Scaph from '../images/scaph3.jpg'
import styles from './contact.css'
import logoLN from '../images/logoLNBeige.svg'
import messenger from '../images/messengerBeige.svg'

class Contact extends React.Component {


  render() {


    return (
      <div id="main-form">

      <div className="container-logo">
      <a href="https://www.linkedin.com/in/adrien-blanchot-24825487"><img className='logoLN' src={logoLN} /></a>
      <a href="https://m.me/Ad-Blanchot"> <img  className='logoMessenger' src={messenger} /> </a>
      </div>

    <div id="form-main">
    <div id="form-div">
      <form id="idea"
            className="form"
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="name"
            action="/success"
            >
        <p className="name">
          <input  type="text" name="name" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Nom" id="name" />
        </p>

        <p className="email">
          <input type="email" name="email" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
        </p>

        <p className="text">
          <textarea name="message" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Commentaire"></textarea>
        </p>



        <div className="submit">
          <input type="submit" value="envoyer" id="button-blue"/>
          <div className="ease"></div>
        </div>
      </form>
    </div>
    </div>
    </div>
    )
  }
}

export default Contact
