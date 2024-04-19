import React, { useState, useEffect } from 'react';
import {ProductContainer} from "./components/productContainer";
import { Product } from "./components/Product";
import instrumentos from './instrumentos.json'
//aca se usa los componentes

const App = () =>{
    return(
        <ProductContainer>
            {instrumentos.map (instrumento =>
            <Product
                imagen={instrumento.imagen}
                name={instrumento.instrumento}
                price={instrumento.precio}
                envio={instrumento.costoEnvio}
                venta={instrumento.ventas}
            />
            )}


            
        </ProductContainer>
    )
}

export default App;