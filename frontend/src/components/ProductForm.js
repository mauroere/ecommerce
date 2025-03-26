import React, { useState } from "react";
import { createProduct } from "../services/productService";
import { uploadFile } from "../services/uploadService";

const ProductForm = ({ onProductCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    imageUrl: "",
    videoUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e, field) => {
    const file = e.target.files[0];
    const url = await uploadFile(file);
    setFormData({ ...formData, [field]: url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = await createProduct(formData);
    onProductCreated(newProduct);
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      imageUrl: "",
      videoUrl: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />
      <input
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <input type="file" onChange={(e) => handleFileUpload(e, "imageUrl")} />
      <input type="file" onChange={(e) => handleFileUpload(e, "videoUrl")} />
      <textarea
        name="appearanceConfig"
        value={JSON.stringify(store.appearanceConfig, null, 2)}
        onChange={(e) => {
          try {
            setStore({
              ...store,
              appearanceConfig: JSON.parse(e.target.value),
            });
          } catch {
            alert("Invalid JSON format");
          }
        }}
        className="textarea"
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
