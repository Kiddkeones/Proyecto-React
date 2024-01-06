import { useState, useEffect } from "react"
import {getProducts, getProductByCategory, getProductById } from "../services"


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

export const useGetProductById = (id) => {
  const [productsData, setProductsData] = useState({})

  useEffect(() =>{
    getProductById(id)
    .then((response) =>{
      console.log(response)
      setProductsData(response.data)
    }
    )
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return { productsData }
}


export const useGetProductByCategory = (category) => {
  const [productCategory, setProductCategory] = useState([])

  useEffect(() => {
    getProductByCategory(category)
    .then((response) => {
      setProductCategory(response.data.products)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [category])

  return { productCategory }
}