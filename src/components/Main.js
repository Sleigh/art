import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ID Oracle</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            The Intuitive Discovery (ID) Oracle Deck is an oracle deck with the beginner in mind. Art for the deck was created intuitively on woodboard with mixed media elements. Each card is meant to inspire you - whether that's on what you should make for dinner or how to approach a situation.  My goal for the deck is to increase the joy you have in your life.
          </p>
          <p>Currently the deck is for sale on <a href="https://www.etsy.com/shop/ImKnotTangled">Etsy</a>, when stock is available.</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
           <a href="https://www.skillshare.com/user/imknottangled">Skillshare Classes</a>
          </p>
          <p>
          <a href="https://creativemarket.com/imknottangled">Fonts on Creative Market</a>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          Growing up, there was always art. It wasn’t ART, in all capital letters, demanding to be heard, but instead art. My father’s pottery was in the bathroom – but he was also an Accountant. My mother would draw on the walls for fun, and she was a Physician Assistant. I made scrapbooks with my grandma and learned to crochet from my great aunts. It wasn’t weird or unusual – it was simple. Like breathing. It was something you did.

I learned to paint after my mom died from a lovely woman who was also an M.D. She encouraged me to take risks in my work and try every medium. Most of my paintings were given away as gifts.

During this time, I never considering myself an artist. Art was just something I did, especially around birthdays, Christmas, and once a year for Art All Night in Pittsburgh.

In early 2014, I started to draw again, but this time more consistently. It was fun! I began blogging and trying other mediums again. I joined the Society of Bluffton Artists and have learned about displaying my art.

I know now that art is not something that I just do, it is a part of who I am.  I am an artist.



I have sold  all over the United States – and now have several pieces in Europe!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
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
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.etsy.com/shop/ImKnotTangled"
                className="icon fa-etsy"
              >
                <span className="label">Etsy</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/imknottangled" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/imknottangled/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
           
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
