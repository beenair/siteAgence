import React from 'react'


export default function Contact() {
  
  return(

    <section className="h-auto pt-10 bg-gray-800">

      {/* Titre */}
      <div className="h-24 flex items-center justify-center text-4xl text-white font-bold">
        Contact
      </div>


      {/* Formulaire de contact */}
      <div className="h-64 mt-10">

        <form className="w-5/6 m-auto grid grid-cols-2 gap-8">

          {/* Coordonnées */}
          <div className="text-sm grid gap-2 grid-rows-3 grid-cols-1">

            <div>
              <input type="text" className="block px-1 focus:bg-gray-300 focus:ring-1 focus:ring-gray-500 focus:outline-none bg-gray-300 border border-1 border-gray-500 shadow sm:mt-1 w-full h-12 font-light rounded-md"/>
            </div>

            <div>
              <input type="text" className="block px-1 focus:ring-1 focus:ring-gray-500 focus:outline-none bg-gray-300 border border-1 border-gray-500 shadow sm:mt-1 w-full h-12 font-light rounded-md"/>
            </div>

            <div>
              <input type="text" className="block px-1 focus:ring-1 focus:ring-gray-500 focus:outline-none bg-gray-300 border border-1 border-gray-500 shadow sm:mt-1 w-full h-12 font-light rounded-md"/>
            </div>

          </div>

          {/* Message */}
          <div>

            <div className="">
              <textarea name="message" id="" cols="30" rows="10" className="block text-gray-700 px-1 focus:ring-1 focus:ring-gray-500 focus:outline-none bg-gray-300 border border-1 border-gray-500 shadow sm:mt-1 w-full font-light rounded-md"></textarea>
            </div>

          </div>

        </form>

      </div>

    </section>
  )
};
