import React from "react";

const LandingPage = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-blue-600">Bienvenidos a Nuestra Tienda</h1>
      <p className="text-lg mt-4 text-gray-700">Explora nuestras secciones y encuentra lo que necesitas.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/home" className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-600">Inicio</h2>
          <p className="mt-2 text-gray-600">Descubre nuestros productos destacados.</p>
        </a>
        <a href="/login" className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-600">Iniciar Sesión</h2>
          <p className="mt-2 text-gray-600">Accede a tu cuenta o regístrate.</p>
        </a>
        <a href="/register" className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-600">Registrarse</h2>
          <p className="mt-2 text-gray-600">Crea una cuenta para comenzar.</p>
        </a>
        <a href="/dashboard" className="block bg-white shadow-lg rounded-lg p-6 text-center hover:bg-blue-50">
          <h2 className="text-2xl font-semibold text-blue-600">Dashboard</h2>
          <p className="mt-2 text-gray-600">Administra tu cuenta y pedidos.</p>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
