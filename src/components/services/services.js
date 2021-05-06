import React from 'react';


// Import des icones
import { BiSupport } from 'react-icons/bi';
import { GrVmMaintenance, GrCode, GrDeploy } from 'react-icons/gr';
import { AiFillDatabase } from 'react-icons/ai';


export default function Services() {

  return(

    <section className="h-auto max-w-screen-2xl m-auto pt-10 flex flex-col bg-gray-200">


      {/* Titre */}
      <div className="h-24 flex items-center justify-center text-4xl text-gray-800 font-semibold">
        SERVICES
      </div>


      {/* Services */}
      <div className="min-h-64 mx-auto my-16 lg:flex lg:flex-row grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 md:gap-8 lg:gap-10">

        {/* Web */}
        <div className="rounded-full shadow-2xl h-32 w-32 lg:h-40 lg:w-40 bg-yellow-500 flex flex-col gap-1 lg:gap-3 items-center justify-center hover:bg-yellow-400 transform hover:scale-110 duration-300">
          <div className="text-3xl lg:text-5xl"><GrCode/></div>
          <div className="text-sm lg:text-xl text-white cursor-default">Web</div>
        </div>

        {/* Support */}
        <div className="rounded-full shadow-2xl h-32 w-32 lg:h-40 lg:w-40 bg-yellow-500 flex flex-col gap-1 lg:gap-3 items-center justify-center hover:bg-yellow-400 transform hover:scale-110 duration-300">
          <div className="text-3xl lg:text-5xl"><BiSupport/></div>
          <div className="text-sm lg:text-xl text-white cursor-default">Support</div>
        </div>

        {/* Maintenance */}
        <div className="rounded-full shadow-2xl h-32 w-32 lg:h-40 lg:w-40 bg-yellow-500 flex flex-col gap-1 lg:gap-3 items-center justify-center hover:bg-yellow-400 transform hover:scale-110 duration-300">
          <div className="text-3xl lg:text-5xl"><GrVmMaintenance/></div>
          <div className="ttext-sm lg:text-xl text-white cursor-default">Maintenance</div>
        </div>

        {/* Deploiement */}
        <div className="rounded-full shadow-2xl h-32 w-32 lg:h-40 lg:w-40 bg-yellow-500 flex flex-col gap-1 lg:gap-3 items-center justify-center hover:bg-yellow-400 transform hover:scale-110 duration-300">
          <div className="text-3xl lg:text-5xl"><GrDeploy/></div>
          <div className="text-sm lg:text-xl text-white cursor-default">Déploiement</div>
        </div>

        {/* Sauvegardes */}
        <div className="rounded-full shadow-2xl h-32 w-32 lg:h-40 lg:w-40 bg-yellow-500 flex flex-col gap-1 lg:gap-3 items-center justify-center hover:bg-yellow-400 transform hover:scale-110 duration-300">
          <div className="text-3xl lg:text-5xl"><AiFillDatabase/></div>
          <div className="text-sm lg:text-xl text-white cursor-default">Sauvegardes</div>
        </div>

      </div>

      {/* Lien vers la page des service */}
      <button className="m-auto flex items-center justify-center my-10 w-40 p-2 rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-600 text-white font-semibold hover:from-yellow-600 hover:to-yellow-400">
        En savoir plus
      </button>

    </section>

  )
  
};
