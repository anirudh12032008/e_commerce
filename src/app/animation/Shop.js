import React from 'react'
import AddToCartButton from '../products/[id]/AddToCartButton'

const Shop = (props) => {
  return (
    <div className="flex justify-center content-center mt-20 z-10">
      <AddToCartButton
        incrementProductQuantity={props.incrementProductQuantity}
        productId={props.prodid}
      />
    </div>
  );
}

export default Shop