import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../services/productService";
import { setProducts, removeProduct } from "../store/productSlice";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg p-4 shadow">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-primary font-bold">${product.price}</p>
          <button
            onClick={() => handleDelete(product._id)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
