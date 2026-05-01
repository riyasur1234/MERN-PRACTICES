import React from 'react'
import Product from './Product'


export default function ProductList(props) {
    console.log(props)
  return (
    props.Product.map((product,i) => {
        return <Product Product = {product} key={i} incrementQuantity = {props.incrementQuantity}/>
    })
  ) 
}
