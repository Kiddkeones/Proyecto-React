import { useState, useEffect } from "react"
import {getProducts } from "../services"


export const useGetProducts = () => {

    const [productsData, setProductsData] = useState ([])
    
    useEffect(() =>{
        getProducts()
        .then(Response =>{
          setProductsData(Response.data.products)
        })
      }, [])


    return {productsData}
}