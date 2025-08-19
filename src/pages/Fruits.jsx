import React from 'react'
import CategoryPage from '../components/CategoryPage'
import bgFruits from '../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
        <CategoryPage title="Fruits & Veggies " bgImage={bgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits