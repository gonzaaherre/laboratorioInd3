import React from 'react'
import './Product.css'


const Product = (props) => {
    const imageUrl = `src/imagenes/img/${props.imagen}`;
    console.log(imageUrl)
    const renderEnvio = () => {
      if (props.envio === "G") {
          return "Envío gratis a todo el país";
      } else {
          return `Costo de envío: $${props.envio}`;
      }
  };
    return (
    <div className='product'>
      <img className='product_img'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZfufh4yxTPVQmTZXzB_AJxpCI44-r6v3EF4G9KOKIQ&s" alt='produc' />

      <h2 className='product_name'>{props.name}</h2>
      <div className='product_details'>
        <p className='product_price'>{props.price}</p>
      </div>
      <p className='product_envio'>{renderEnvio()}</p>
      <h6 className='product_ventas'>{props.venta}</h6>
    </div>
  )
}

export  {Product}
