import { useEffect, useState } from 'react';
import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { getProducts } from './services';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [productsData, setProductsData] = useState ([])
  
  
  useEffect(() =>{
    getProducts()
    .then(Response =>{
      setProductsData(Response.data.products)
    })
  }, [])

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <NavBarComponent />
      <ItemListContainer productsData={productsData} />
    </div>
  );
}

export default App;
