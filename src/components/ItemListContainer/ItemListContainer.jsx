import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./item.css"
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../../hooks/useProducts';
import { Link } from 'react-router-dom';


export const ItemListContainer = () => {

  const { productId } = useParams()
  const { productData } = useGetProductById(productId)
  return (
    <div className='cards'>
      {
      productData.map(products => {
        return (
          <Card key={productData.id}>
            <Link to={`/item/${products.id}`}>
            <Card.Img variant='top' src={productData.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title>{productData.Title}</Card.Title>
              <Card.Text>
                {productData.description}
              </Card.Text>
              <div>{productData.price}</div>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        )
      })
    }

    </div>
  )
}
