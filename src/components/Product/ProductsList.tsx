import React from 'react'
import ProductCard from './ProductCard'

type ProductsListProps = {
  data: any[]
}
const ProductsList = ({data = []}: ProductsListProps) => {
  return (
    <>
      {data.map((product, index) => <ProductCard product={product} key={index} />)}
    </>
  )
}

export default ProductsList