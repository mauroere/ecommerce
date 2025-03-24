import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} width="100" />}
            {product.videoUrl && (
              <video width="200" controls>
                <source src={product.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;