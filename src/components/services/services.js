import React from 'react';

// Importation des icones
import { BiSupport } from 'react-icons/bi';
import { GrVmMaintenance,GrCode } from 'react-icons/gr';
import { AiFillDatabase } from 'react-icons/ai';


export default function Services() {

  return(

    <section className="h-auto m-auto flex flex-col bg-gray-200">


      {/* Titre */}
      <div className="h-24 mt-10 flex items-center justify-center text-5xl text-gray-800 font-bold">
        SERVICES
      </div>


      {/* Services */}
      <div className="h-64 m-auto flex flex-row items-center justify-center gap-10">

        {/* Web */}
        <div className="rounded-full shadow-2xl h-40 w-40 bg-yellow-500 flex flex-col gap-3 items-center justify-center hover:bg-yellow-400 transform hover:scale-110 duration-300">
          <div className="text-5xl"><GrCode/></div>
          <div className="text-xl text-white">Web</div>
        </div>

        {/* Helpdesk */}
        <div className="rounded-full shadow-2xl h-40 w-40 bg-yellow-500 flex flex-col gap-3 items-center justify-center hover:bg-yellow-400 transform hover:scale-110 duration-300">
          <div className="text-5xl"><BiSupport/></div>
          <div className="text-xl text-white">Support</div>
        </div>

        {/* Deploiement */}
        <div className="rounded-full shadow-2xl h-40 w-40 bg-yellow-500 flex flex-col gap-3 items-center justify-center hover:bg-yellow-400 transform hover:scale-110 duration-300">
          <div className="text-5xl"><GrVmMaintenance/></div>
          <div className="text-xl text-white">Maintenance</div>
        </div>

        {/* Sauvegardes */}
        <div className="rounded-full shadow-2xl h-40 w-40 bg-yellow-500 flex flex-col gap-3 items-center justify-center hover:bg-yellow-400 transform hover:scale-110 duration-300">
          <div className="text-5xl"><AiFillDatabase/></div>
          <div className="text-xl text-white">Sauvegardes</div>
        </div>

      </div>


      <div className="flex justify-center my-10">
        <button className="h-10 w-32 rounded-md bg-gray-800 text-white border border-gray-800 hover:bg-yellow-500">
          Plus
        </button>
      </div>

    </section>

  )
  
};
