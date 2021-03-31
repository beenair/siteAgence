import React from 'react'
import {Link} from 'react-scroll'
import $ from 'jquery'

export default function MenuTop() {


  // Action d'apparition du menu lors du clic sur le bouton du Menu Burger
  function toggleMenu(){
    if ($(".menu").hasClass('hidden')) {
      $(".menu").removeClass('hidden')
    } else {
        $((".menu")).addClass('hidden')
    };
  }


  return(


    <section className="bg-gray-800 w-full h-auto text-white">


      <div className="m-auto h-auto flex flex-row px-3 lg:w-5/6">

        {/* LOGO */}
        <div className="flex flex-1 h-16 items-center font-bold text-2xl">
          BEENAIR
        </div>


        {/* MENU */}
        <div className="menu hidden flex flex-grow flex-col mt-16 py-2 items-center lg:mt-0 lg:py-0 lg:flex lg:flex-row lg:flex-1 lg:space-x-2 lg:justify-end">
          <Link to="" className="p-2 h-full flex items-center cursor-pointer hover:bg-yellow-500">Accueil</Link>
          <Link to="" className="p-2 h-full flex items-center cursor-pointer hover:bg-yellow-500">Services</Link>
          <Link to="" className="p-2 h-full flex items-center cursor-pointer hover:bg-yellow-500">Contact</Link>
          <Link to="" className="p-2 h-full flex items-center cursor-pointer hover:bg-yellow-500">Espace clients</Link>
        </div>


        {/* Menu burger */}
        <div className="flex flex-1 items-center justify-end h-16 lg:hidden" id="burger-menu">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white lg:hidden" onClick={toggleMenu}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>


      </div>

    </section>

  );
  
};
