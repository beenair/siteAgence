import React from 'react';

// Composants
import MenuTop from './header/menu_top'
import Header from './header/header'
import Services from './services/services'
import Contact from './contact/contact'



export default function Landing() {

  return (

    <section>

      <MenuTop/>
      <Header/>
      <Services/>
      <Contact/>

    </section>

  )
  
};
