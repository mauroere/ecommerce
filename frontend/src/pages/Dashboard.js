import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/home" className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-600">Inicio</h2>
          <p className="mt-2 text-gray-600">Explora los productos destacados.</p>
        </Link>
        <Link to="/products" className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-600">Productos</h2>
          <p className="mt-2 text-gray-600">Administra el catálogo de productos.</p>
        </Link>
        <Link to="/orders" className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-600">Pedidos</h2>
          <p className="mt-2 text-gray-600">Revisa y gestiona los pedidos.</p>
        </Link>
        <Link to="/stores" className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-600">Tiendas</h2>
          <p className="mt-2 text-gray-600">Configura las tiendas disponibles.</p>
        </Link>
        <Link to="/profile" className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-600">Perfil</h2>
          <p className="mt-2 text-gray-600">Administra tu perfil y configuración.</p>
        </Link>
        <Link to="/analytics" className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-600">Analíticas</h2>
          <p className="mt-2 text-gray-600">Consulta estadísticas y reportes.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;