import { useParams } from 'react-router-dom';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { useGetProductByCategory } from '../hooks/useProducts';


export default function Category() {
  const{id} = useParams()
  const {productCategory} = useGetProductByCategory(id)

  return (
    <ItemListContainer productsData={productCategory}/>
  )
}
