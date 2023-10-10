import React from 'react'

const  ShoeCard = ({ imgURL, changeBigPhoneImage, bigPhoneImg }) => {

    const handleClick = () => {
        if(bigPhoneImg !== imgURL.bigPhone) {
            changeBigPhoneImage(imgURL.bigPhone)
        }
    }

  return (
    <div className={`border-2 rounded-xl 
    ${bigPhoneImg === imgURL.bigPhone ? 'border-coral-red'
     : 'border-transparent' } cursor-pointer max-sm:flex-1
    `} onClick={handleClick}>

        <div className='flex justify-center items-center bg-card 
        bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img
            src={imgURL.thumbnail}
            alt='shoe collection'
            width={127}
            height={103}
            className='object-contain'
            />
        </div>

    </div>
    
  )
}

export default ShoeCard