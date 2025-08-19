import React from 'react'
import CategoryPage from '../components/CategoryPage'
import bgdairy from '../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div><CategoryPage title="Eggs & Dairy " bgImage={bgdairy} categories={['Egg','Dairy']}/></div>
  )
}

export default Dairy