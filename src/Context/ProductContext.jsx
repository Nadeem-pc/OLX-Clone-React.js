import React, { Children, createContext, useState } from 'react'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {

    const[login, setLogin] = useState('false')

    const[productData, setProductData] = useState({
        category: '',
        sqft: '',
        bathrooms: '',
        bedrooms: '',
        brand: '',
        year: '',
        owners: '',
        KmDriven: '',
        title: '',
        description: '',
        price: '',
        images: ['', '', '']
    })

  return (
    <ProductContext.Provider value={{productData, setProductData, login, setLogin}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider