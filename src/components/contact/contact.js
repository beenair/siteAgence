import React from 'react'


// Import des icones
import { BiPaperPlane } from 'react-icons/bi';



export default function Contact() {
  
  return(

    <section className="contact h-screen pt-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">

      {/* Titre */}
      <div className="h-24 flex items-center justify-center text-4xl text-gray-300 font-semibold">
        Contact
      </div>


      {/* Formulaire de contact */}
      <div className="h-3/4 max-w-screen-2xl w-2/3 m-auto py-10 mt-10 rounded-3xl shadow-2xl bg-gradient-to-tr from-gray-900 to-gray-700 ">

        <form className="w-5/6 m-auto grid grid-cols-1 gap-10 text-sm">

          {/* Coordonnées */}
          <div className="grid gap-6 grid-rows-2 grid-cols-2">

            <div>
              <label for="nom" className="block px-2 font-semibold text-gray-500">Nom *</label>
              <input type="text" placeholder="Nom complet" className="block px-5 focus:ring-1 focus:ring-gray-500 focus:outline-none bg-gray-700 shadow sm:mt-1 w-full h-12 font-light rounded-full"/>
            </div>

            <div>
              <label for="mail" className="block px-2 font-semibold text-gray-500">Mail *</label>
              <input type="text" placeholder="Mail" className="block px-5 focus:ring-1 focus:ring-gray-500 focus:outline-none bg-gray-700 shadow sm:mt-1 w-full h-12 font-light rounded-full"/>
            </div>

            <div>
              <label for="telephone" className="block px-2 font-semibold text-gray-500">Téléphone *</label>
              <input type="text" placeholder="Portable" className="block px-5 focus:ring-1 focus:ring-gray-500 focus:outline-none bg-gray-700 shadow sm:mt-1 w-full h-12 font-light rounded-full"/>
            </div>

            <div>
              <label for="sujet" className="block px-2 font-semibold text-gray-500">Sujet *</label>
              <select name="sujet" placeholder="Sujet" className="block px-5 focus:ring-1 focus:ring-gray-500 focus:outline-none bg-gray-700 shadow sm:mt-1 w-full h-12 font-light text-gray-400 rounded-full">
                <option className="w-full h-12" value="Contact">Prise de contact</option>
                <option className="w-full h-12" value="Temoignage">Témoignage</option>
              </select>
            </div>

          </div>

          {/* Message */}
          <div>
              <label for="message" className="block px-2 font-semibold text-gray-500">Votre message *</label>
              <textarea name="message" id="" cols="30" rows="10" className="block text-gray-700 px-5 py-2 focus:ring-1 focus:ring-gray-500 focus:outline-none bg-gray-700 shadow sm:mt-1 w-full font-light rounded-3xl"></textarea>
          </div>

          <button className="flex flex-row items-center justify-center gap-4 m-auto p-2 w-40 font-semibold text-white bg-gradient-to-tr from-yellow-600 to-yellow-600 rounded-full hover:from-yellow-600 hover:to-yellow-400">
            <div className="text-xl"><BiPaperPlane/></div>
            <div className="">Envoyer</div>
          </button>

        </form>

      </div>

    </section>
  )
};
