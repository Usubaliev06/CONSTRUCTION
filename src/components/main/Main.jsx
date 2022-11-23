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


    </main>
  );
}

export default Main;
