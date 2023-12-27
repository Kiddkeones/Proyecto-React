import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';

export default function Category() {

  const {productsData} = useGetProducts ()

  return (
    <ItemListContainer productsData={productsData} />
  )
}
