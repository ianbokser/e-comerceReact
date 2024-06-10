import React from 'react'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import ItemDetailsComponent from '../components/ItemDetailsComponent/ItemDetailsComponent'

import { getProductById } from '../services/productServices'
import { useParams } from'react-router-dom'

export const ItemDetailsContainer = () => {

  const [product, setProduct] = React.useState({})

  const { id } = useParams();

  React.useEffect(() => {
    getProductById(id)
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err))
  },[])

  return (
    <>
      <NavBarComponent></NavBarComponent>
      <ItemDetailsComponent product={product}></ItemDetailsComponent>
    </>
  )
}
