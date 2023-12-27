import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';


export default function Home() {

  const {productsData} = useGetProducts ()
  
  return (
    <ItemListContainer productsData={productsData} />
  )
}
