import React from 'react'
import Banner from './Banner'
import ProductList from './ProductList'
import Cards from './Cards'

const CategoryPage = ({title,bgImage,categories=[]}) => {

    let filteredItems = categories.includes('All')?ProductList:
    ProductList.filter(item=>categories.includes(item.category))
  

    const renderProduct=filteredItems.map(product=>{
        return (
            <Cards image={product.image} name={product.name} price={product.price}/>
        )
    })
    return (

    <div>
        <Banner title={title} bgImage={bgImage}/>
        <div className='max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-10'>
            {renderProduct}
        </div>
        </div>
  )
}

export default CategoryPage