import React from 'react'
import CategoryPage from '../components/CategoryPage'
import bgSeafood from '../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div><CategoryPage title="Meat & Seafood " bgImage={bgSeafood} categories={['SeaFood','Meat']}/></div>
  )
}

export default SeaFood