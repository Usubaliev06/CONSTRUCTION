import React from 'react';
import css from "./Footer.module.css"

import logo from '../../images/Logo.png'
import Facebook from '../../images/Group 1145.png'
import Twitter from '../../images/Group 1146.png'
import Linkedin from '../../images/Layer 1.png'






const Footer = () => {
  return (
    <footer>

<div className={css.block_1}>

  <div className={css.colum1}>

    <img src={logo} alt="" />

    <p>You’ll find your next <br />
       Home loan valu you prefer.</p>
    
    <div className={css.social}> 
     <a href=""><img src={Facebook} alt="" /></a>
     <a href=""><img src={Twitter} alt="" /></a>
     <a href=""><img src={Linkedin} alt="" /></a>
    </div>

  </div>


<div className={css.colum2}>

  <h2>Resources</h2>

  <a href="">Our Agents</a>
  <a href="">Member Stories</a>
  <a href="">Video</a>
  <a href="">Free trial</a>

</div>


<div className={css.colum2}>

  <h2>Company</h2>

  <a href="">Patnerships</a>
  <a href="">Terms of use</a>
  <a href="">Privacy</a>
  <a href="">Sitemap</a>

</div>


<div className={css.colum3}>

  <h2>Get in touch</h2>

  <input type="text"  placeholder='input your mail'/>
</div>



</div>

<hr />


<div className={css.block_2}>

<p>Copyright construction.com, All rights reserved.</p>

</div>



    </footer>
  );
}

export default Footer;
