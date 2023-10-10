import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { phones, statistics } from '../constants'
import { phone1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {

  const [bigPhoneImg, setBigPhoneImg] = useState(phone1);

  return (
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center
     min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center 
      items-start w-full max-xl:padding-x pt-28'>

        <p className='text-xl font-montserrat text-coral-red'>Our Smart Devices</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>

        <span className='inline-block mb-6 '>
          The
          </span> 
          <br/>

         <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 inline-block mb-3'>
          Newly Launched
          </span> 
         <br/>
         <span className='text-coral-red inline-block mt-3'>Apple </span> 
         <span className='xl:bg-white xl:whitespace-nowrap relative z-10  '> Gadgets</span>
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Explore a world of premium quality 
          through our highly coveted collection. Uncover the perfect blend of sophistication, and exceptional value at our Apple gadget store.</p>

            <Button label="Shop now" iconURL={arrowRight}/>

            <div className='flex justify-start items-start 
            flex-wrap w-full mt-20 gap-16'>
              {statistics.map((stat) => (
                <div key={stat.label}>
                  <p className='text-4xl font- font-bold'>{stat.value}</p>
                  <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
                </div>
              ))}

            </div>

      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40
       bg-primary bg-hero bg-cover bg-center'>
        <img
        src={bigPhoneImg}
        alt='shoe collection'
        width={610}
        height={500}
        className='object-contain relative z-10'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {phones.map((phone) => (
            <div key={phone}>
              <ShoeCard imgURL={phone}
               changeBigPhoneImage={(phone) => setBigPhoneImg(phone)}
               bigPhoneImg={bigPhoneImg}
               />

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Hero