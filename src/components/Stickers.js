import React, { Component } from 'react'

class Stickers extends Component {
  render() {
    return (
      <div>
        <main>
          <header onClick={() => this.props.history.push('/')}>
            <h1>Suncoast Developers Guild</h1>
          </header>

          <section>
            <article>
              <h1>Stickers!</h1>

              <p>
                Buy stickers from{' '}
                <a href="https://www.stickermule.com/unlock?ref_id=0081760701">
                  Sticker Mule
                </a>{' '}
                and support the Suncoast Developers Guild.
              </p>

              <figure className="sticker-mule-banner">
                <a href="https://www.stickermule.com/unlock?ref_id=0081760701">
                  <img
                    alt="Custom Stickers, Die Cut Stickers, Bumper Stickers - Sticker Mule"
                    border="0"
                    height="60"
                    src="https://d3g919u5f14ld1.cloudfront.net/assets/images/stores/sticker_mule/banners/small-90e5f24277.jpg"
                    width="234"
                  />
                </a>
                <p>
                  <strong>Wait!</strong> Before you buy our stickers, use this
                  referral link to make an account. You'll get $10 store credit,
                  and if you make <em>any</em> purchase, we also get $10 that
                  we'll use to order more stickers and spread the word about our
                  mission.
                </p>
              </figure>
              <div className="sticker-previews">
                <a href="https://www.stickermule.com/user/1070671800/stickersd">
                  <img
                    src="https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/7793/large/1440768643/suncoast-developers-guild.png"
                    alt="Suncoast Developers Guild"
                  />
                </a>
                <a href="https://www.stickermule.com/user/1070671800/stickers">
                  <img
                    src="https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/6815/large/1438800752/tampa-ruby.png"
                    alt="Tampa Ruby Brigade"
                  />
                </a>
                <a href="https://www.stickermule.com/user/1070671800/stickers">
                  <img
                    src="https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/11283/large/1458681506/suncoast-dot-io-icon.png"
                    alt="Suncoast.io Icon"
                  />
                </a>
              </div>

              <p>
                The Suncoast Developers Guild earns a small markup on any sales.
                We'll use that to further our mission. That mostly means we'll
                just buy even more stickers with it to spread the word!
              </p>
            </article>
          </section>
        </main>
        <footer>
          <div className="copywrite">
            &copy; 2017 Suncoast Developers Guild
            <i className="fa fa-meetup" />
          </div>
        </footer>
      </div>
    )
  }
}

export default Stickers
