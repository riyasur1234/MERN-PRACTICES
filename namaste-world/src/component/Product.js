import React from 'react'

export default function Product(props) {

    function incrementQuantity(index){

    }
  return (
    <div className='row'>
        <div className='col-5'>
            <h2>{props.Product.name}<span className="badge text-bg-secondary">{props.Product.price}</span></h2>
        </div>
        <div className='col-3'>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
              <button type="button" className="btn btn-danger">-</button>
              <button type="button" className="btn btn-warning">{props.Product.quantity}</button>
              <button type="button" className="btn btn-success" onClick={this.incrementQuantity()}>+</button>
            </div>
            <div className='col-4'>
                {props.Product.quantity*props.Product.price}

            </div>

           
        </div>
      
    </div>
  )
}
