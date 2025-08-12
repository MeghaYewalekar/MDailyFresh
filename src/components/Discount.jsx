import React from 'react'
import Button from './Button'
import freshFruits from "../assets/fresh-fruits.png"

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-right bg-no-repeat bg-contain' style={{backgroundImage : `url(${freshFruits})`}}>
        <div className='flex flex-col md:flex-row max-w-[1400px] mx-auto px-10 py-10'>
            <span className='text-5xl md:text-9xl text-orange-500 font-bold ransform md:-rotate-90 h-fit md:self-center'>20%</span>
            <div className='max-w-[700px] '>
                <h3 className='text-4xl md:text-7xl text-zinc-800 font-bold '>First Order Discount!</h3>
                <p className='text-zinc-800 my-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla libero tempora, moll</p>
                <Button content="Get a Discount"/>
            </div>

        </div>
    </section>
  )
}

export default Discount