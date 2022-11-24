import React from 'react';
import css from './Main.module.css'

import sponsor_logo_1 from '../../images/sponsor_logo_1.png'
import sponsor_logo_2 from '../../images/sponsor_logo_2.png'
import sponsor_logo_3 from '../../images/sponsor_logo_3.png'
import sponsor_logo_4 from '../../images/sponsor_logo_4.png'
import sponsor_logo_5 from '../../images/sponsor_logo_5.png'
import build2 from '../../images/image.png'
import sheet1 from '../../images/Rectangle 4304.png'
import sheet2 from '../../images/Rectangle 4305.png'
import sheet3 from '../../images/Rectangle 4306.png'
import star from '../../images/Star.png'
import burger from '../../images/Burger.png'
import Chris from '../../images/Chris.png'
import Alison from '../../images/Alison.png'
import Adam from '../../images/Adam.png'
import arrow1 from '../../images/Icon.png'
import arrow2 from '../../images/Icon (1).png'
import quotes from '../../images/quates2.png'
import map from '../../images/Group 597.png'
import arrow_button from '../../images/arrow_button.png'







const Main = () => {
  return (
    <main>

      <div className={css.logos}>

        <img src={sponsor_logo_1} alt="" />
        <img src={sponsor_logo_2} alt="" />
        <img src={sponsor_logo_3} alt="" />
        <img id={css.big} src={sponsor_logo_4} alt="" />
        <img id={css.big} src={sponsor_logo_5} alt="" />

      </div>


      <div className={css.block_1}>

        <div className={css.choose}>
          <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
          <button>Explore</button>
        </div>

        <h3>Why Choose us for best construction experience</h3>

      </div>


      <div className={css.block_2}>

        <img src={build2} alt="" />

        <div className={css.facts}>

          <div className={css.fact}>
            <img src={sheet1} alt="" />
            <h2>01</h2>
            <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
          </div>

          <div className={css.fact}>
            <img src={sheet2} alt="" />
            <h2>02</h2>
            <p>Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.</p>
          </div>

          <div className={css.fact}>
            <img src={sheet3} alt="" />
            <h2>03</h2>
            <p>Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.</p>
          </div>

        </div>

      </div>


      <div className={css.block_3}>

        <h1>Our Best Engineers</h1>

        <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>

        <div className={css.cards}>

          <div className={css.card}>

            <a className={css.star} href=""><img src={star} alt="" /></a>
            <a className={css.burger} href=""><img src={burger} alt="" /></a>

            <img src={Chris} alt="" />

            <h3>Chris Evans</h3>

            <p className={css.city}>Michigan, TX</p>

            <p className={css.number}>989-653-2986</p>

            <a href="">ChrisEvans@const.com</a>

          </div>

          <div className={css.card}>

            <a className={css.star} href=""><img src={star} alt="" /></a>
            <a className={css.burger} href=""><img src={burger} alt="" /></a>

            <img src={Alison} alt="" />

            <h3>Alison Kiara</h3>

            <p className={css.city}>Michigan, TX</p>

            <p className={css.number}>989-653-2986</p>

            <a href="">alisonkiara@const.com</a>

          </div>

          <div className={css.card}>

            <a className={css.star} href=""><img src={star} alt="" /></a>
            <a className={css.burger} href=""><img src={burger} alt="" /></a>

            <img src={Adam} alt="" />

            <h3>Adam Gates</h3>

            <p className={css.city}>Michigan, TX</p>

            <p className={css.number}>989-653-2986</p>

            <a href="">adamgates@const.com</a>

          </div>


        </div>

        <div className={css.arrows}>

          <button id={css.first_arrow}>
            <img src={arrow1} alt="" />
          </button>

          <button id={css.second_arrow}>
            <img src={arrow2} alt="" />
          </button>


        </div>

      </div>

      <div className={css.block_4}>

        <h1>Message from CEO</h1>

        <img id={css.quotes1} src={quotes} alt="" />

        <p>Shewing met parties gravity husband sex pleased. On to no kind do next feel held walk. Last own loud and knew give gay four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.</p>

        <p>Do in laughter securing smallest sensible no mr hastened. As perhaps proceed in in brandon of limited unknown greatly. Distrusts fulfilled happiness unwilling as explained of difficult. No landlord of peculiar ladyship attended if contempt ecstatic. Loud wish made on is am as hard. Court so avoid in plate hence. Of received mr breeding concerns peculiar securing landlord. Spot to many it four bred soon well to. Or am promotion in no departure abilities. Whatever landlord yourself at by pleasure of children be.</p>

        <img id={css.quotes2} src={quotes} alt="" />

      </div>


      <div className={css.block_5}>

        <h1>Contact Us</h1>

        <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>

        <div className={css.plase}>

          <div className={css.inputs}>

            <fieldset>
              <legend>Name </legend>
              <label for="">
                <input id={css.input1} type="" name="" placeholder='Maya' />
              </label>
            </fieldset>

            <input id={css.input2} type="text" name="" placeholder='Email' />

            <input id={css.input2} type="text" name="" placeholder='Email' />

            <input id={css.input4} type="text" name="" placeholder='Massage' />

            <button>Send Massage</button>

          </div>

          <img src={map} alt="" />

        </div>

      </div>

      <div className={css.block_6}>

        <h1>Lattest Blogs</h1>

        <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>

        <div className={css.wrapper}>

          <div className={css.first_citation}>
            <h2>Unleash Your Creativity</h2>
            <p>Nine for Mortal Men, doomed to die, One for</p>
          </div>

          <div className={css.second_citation}>

            <h2>Unleash Your Creativity</h2>

            <p>Nine for Mortal Men, doomed to die, One for</p>

            <button>Read more</button>

          </div>

          {/* <input type="range" value=""></input> */}

        </div>

      </div>

      <div className={css.block_7}>

        <h1>Subscribe to our
          Newsletter</h1>

        <p>Age sold some full like rich new. Amounted repeated as believed in confined juvenile.</p>

        <button>
          SUBSCRIBE
          <img src={arrow_button} alt="" />
        </button>

      </div>


    </main>
  );
}

export default Main;
