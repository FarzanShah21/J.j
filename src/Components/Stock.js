import React from 'react'

const Stock = (props) => {
    const {stock}= props;
  return (
    <div>
      {
      stock>=1 ? (<div>
        <span className='text-dark'>In Stock : {stock}</span>
      </div>) : (<div>
      <span className='text-dark'>Out of Stock</span>
      </div>)
      }
    </div>
  )
}

export default Stock
