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
    <form method="post" action="#">
      <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
      </div>
      <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6"></textarea>
      </div>
      <ul className="actions">
          <li><input type="submit" value="Send Message" className="special" /></li>
          <li><input type="reset" value="Clear" /></li>
      </ul>
  </form>
    </div>
    </div>
    </div>
    )
  }
}

export default Contact
