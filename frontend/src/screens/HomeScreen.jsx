
import React from 'react';
import {Row,Col} from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from "../components/Loader";
import Message from '../components/Message';
const HomeScreen = () => {
  
  
  const {data:products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (<h2><Loader/></h2>) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>) : (<>
     
      <h1>Lastest Product</h1>
      <Row>
       {products.map((product)=>(
           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              {/* <h3>{product.name}</h3>   */}
              <Product product={product}/>   
           </Col>
       ))}
      </Row>
      </>)}


   
    </>
    
  )
}

export default HomeScreen