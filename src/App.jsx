import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import ColectorsForms from './Components/ColectorsForm/ColectorsForms';
import UsersForm from './Components/UsersForm/UsersForm';
const MainPage = () => {

  const [formType, setFormType] = useState("user");

  const handleChangeFormType = (type) => {
     
setFormType(type)
  };



  return (
   <div className=''>
    < Navbar />
    <section className="relative pt-32 lg:pt-36 mr-12 ml-12 bg-" >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 ">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-white blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-white blur-xl opacity-80"></span>
        </div>
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-slate-50 to-white absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-heading-1">
          Experience Our <br/>  <span className="text-transparent bg-clip-text bg-gradient-to-br from-lime-800 from-20% via-lime-600 via-30% to-lime-400 text-7xl">Premier <br/> </span> Pickup Service!
          </h1>
          <h1 className="mt-8 text-black md:text-lg text-heading-3 font-light">
          Join us in our mission to keep your community clean and green. With our efficient trash pickup service, say goodbye to clutter and hello to a pristine neighborhood. Let's work together to make a difference, one bag at a time.
          </h1>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">

           < div className=" text-white pt-2 pb-2 pl-4 pr-4 rounded-lg bg-lime-700 ">
              <button className="  flex justify-center w-full sm:w-max font-semibold text-lg" ><a href='#form'>Register Now!</a></button>
              </div>
             
            </div>
          </div>
        </div>

        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl h-full w-full mr-12">
          <img src="../src/assets/garbage.jpg" alt="Hero image" width="4500" height="4500" className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none h-full w-full" />
        </div>
      </div>
    </section>


   <div className='mr-48 mt-32 mb-12' id='form'>
    <div className='w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-lime-400 to-lime-600 dark:from-lime-800 ml-24 '>
    <div className="mx-auto text-center max-w-xl md:max-w-2xl relative">
        <h1
          className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight
          font-bold text-heading-1"
        >
          If you want to help us make the change <span className="text-transparent bg-clip-text bg-black">Become one of us!</span> 
        </h1>
        <h1 className={"pt-10"}>
        Register if you want to be part of the change and help us to be part of the movement.
        </h1>
        <div className="mx-auto max-w-md sm:max-w-xl pt-10">
           <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-bg lg:border-0 px-6 lg:px-0">
            <div className={`${formType === 'collector' && 'bg-white'} hover:text-black p-2 rounded-lg ml-8`}>
              <button className="flex justify-center w-full sm:w-max font-semibold text-lg" onClick={()=>handleChangeFormType('collector')}>Register as a pickup agent</button>
              </div>
              <div className={`${formType === 'user' && 'bg-white'} hover:text-black p-2 rounded-lg ml-32`}>
              <button className="  flex justify-center w-full sm:w-max font-semibold text-lg" onClick={()=>handleChangeFormType('user')}>Register as a user</button>
              </div>
              </div>
        </div>
      </div>
      </div>
      </div>

      {formType === 'user' ? <UsersForm/> : <ColectorsForms/>}

   </div>
   
  );
};

export default MainPage;
