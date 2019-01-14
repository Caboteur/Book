import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Motion from '../images/motion-web.svg'
import styles from './contact.css'

class Contact extends React.Component {


  render() {


    return (
    <div>
    <div id="form-main">
    <div id="form-div">
      <form className="form"
            name="contact-form"
            method="post"
            >

        <p className="name">
          <input  type="text" name="form-name" className=" feedback-input" placeholder="Nom" id="name" />
        </p>

        <p className="email">
          <input type="email" name="email" className=" feedback-input" id="email" placeholder="Email" />
        </p>

        <p className="text">
          <textarea name="message" className=" feedback-input" id="comment" placeholder="Commentaire"></textarea>
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
