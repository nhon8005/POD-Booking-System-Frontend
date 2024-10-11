import React, { useEffect, useState } from 'react'
import api from '../../config/axios';
import './index.scss'
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/features/cartSlice';

function HomePage() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try{
      const response = await api.get("/product/all")
      setProducts(response.data.content)
      console.log(response.data)
    }catch(e){
      console.log('error fetch product: ', e);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <div>
      {/*tu danh sach san pham, bien moi san pham thanh 1 cai product*/}
      <div className='product-list'>
        {
          products.map((product) => (
          <Product product={product}/>
        ))}
      </div>
    </div>
  )
}

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(product))
  }

  return (
  <div className='product'>
    <img 
      src={product.imgage} 
      alt ="" />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <span>{product.price}</span>

    <center>
      <Button onClick={handleAddToCart}>Add to cart</Button>
    </center>
  </div>
  )
}

export default HomePage