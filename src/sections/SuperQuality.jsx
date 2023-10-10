import React from 'react'
import Button from '../components/Button'
import {gadget} from '../assets/images';

const SuperQuality = () => {
  return (
  <section id='about-us' className='flex justify-between
   items-center max-lg:flex-col gap-10 w-full max-container'>
    <div className='flex flex-1 flex-col'>
    
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
         We Provide You <span className='text-coral-red 
         inline-block mt-3'> Super </span> 

       <span className='text-coral-red 
         inline-block mt-3'> Quality </span> Gadgets
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
          Guaranteeing superior comfort and style, our exquisitely crafted products are engineered
           to enhance your lifestyle, delivering unparalleled quality, innovation, and a touch of elegance.
          </p>

          <p className='mt-6 lg:max-w-lg info-text'>
            Our dedication to detail and excellence ensures 
            your satisfaction
          </p>

          <div className='mt-11 '>
            
          <Button label="View detail"/>

          </div>
    </div>

    <div className='flex-1 flex justify-center items-center'>

            <img
             src={gadget}
             alt='gadget'
             width={570}
             height={522}
             className='object-contain'
              />

          </div>

  </section>
  )
}

export default SuperQuality