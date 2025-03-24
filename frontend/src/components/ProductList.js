import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../services/productService';
import { setProducts, removeProduct } from '../store/productSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      dispatch(setProducts(data));
    };
    fetchProducts();
  }, [dispatch]);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;