import React from 'react'
import CategoryPage from '../components/CategoryPage'
import bgAllProducts from '../assets/all-banner.jpg' 

const Allproducts = () => {
  return (
    <div><CategoryPage title="All Products" bgImage={bgAllProducts} categories={['All']}/></div>
  )
}

export default Allproducts