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
            data-netlify="true"
            data-netlify-honeypot="bot-field">


        <p className="name">
          <input name="bot-field"  type="text" name="name" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
        </p>

        <p className="email">
          <input type="email" name="email" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
        </p>

        <p className="text">
          <textarea name="message" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
        </p>

        <div data-netlify-recaptcha="true"></div>

        <div className="submit">
          <input type="submit" value="SEND" id="button-blue"/>
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