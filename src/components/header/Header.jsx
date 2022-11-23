import React from 'react';
import css from './Header.module.css'
import logo from '../../images/Logo.png'
import ellipse_1 from '../../images/Ellipse 739.png'
import ellipse_2 from '../../images/Ellipse 740.png'
import ellipse_3 from '../../images/Ellipse 741.png'
import build from  '../../images/build.png'

const Header = () => {
  return (
    <header>

      <nav>
        <img src={logo} alt="" />

        <div className={css.nav_links}>
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Project</a>
        </div>

      </nav>

      <h1><span className={css.color_blue}>Masters</span> of
        Consistency and <span className={css.color_blue}>Quality.</span></h1>

      <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>

      <div className={css.header_buttons}>
        <button id={css.first_header_button}>Explore</button>
        <button id={css.second_header_buttons}>Contact Us</button>
      </div>

      <div className={css.experience}>

        <div className={css.experience_items}>
          <img src={ellipse_1} alt="" />
          <h4>25,356</h4>
          <p>Projects Done</p>
        </div>

        <div className={css.experience_items}>
          <img src={ellipse_2} alt="" />
          <h4>15,200</h4>
          <p>Buildings Done</p>
        </div>

        <div className={css.experience_items}>
          <img src={ellipse_3} alt="" />
          <h4>350+</h4>
          <p>Total Employees</p>
        </div>

      </div>

      <img id={css.build} src={build} alt="" />

    </header>

  );
}

export default Header;
