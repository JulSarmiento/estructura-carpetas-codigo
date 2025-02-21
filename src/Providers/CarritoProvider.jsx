import { useState } from 'react';
import CarritoContext from '../Context/CarritoContext';

/**
 * @function CarritoProvider
 * @description Proveedor del contexto del carrito. Envuelve la aplicación y proporciona el estado y las funciones del carrito a los componentes hijos.
 * @param {object} { children } - Los componentes hijos que se renderizarán dentro del proveedor del carrito.
 * @returns {JSX.Element} El proveedor del contexto del carrito con el estado y las funciones del carrito.
 */
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  /**
   * @function agregarAlCarrito
   * @description Agrega un producto al carrito. Si el producto ya existe en el carrito, incrementa su cantidad.
   * @param {object} producto - El producto a agregar al carrito. Debe tener una propiedad `id` única.
   */
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);
    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  /**
   * @function eliminarDelCarrito
   * @description Elimina un producto del carrito por su ID.
   * @param {number} id - El ID del producto a eliminar del carrito.
   */
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  /**
   * @function vaciarCarrito
   * @description Vacía completamente el carrito de compras.
   */
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  /**
   * @function obtenerCantidadTotal
   * @description Calcula la cantidad total de items en el carrito.
   * @returns {number} La cantidad total de items en el carrito.
   */
  const obtenerCantidadTotal = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  /**
   * @function obtenerPrecioTotal
   * @description Calcula el precio total de los items en el carrito.
   * @returns {number} El precio total de los items en el carrito.
   */
  const obtenerPrecioTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        obtenerCantidadTotal,
        obtenerPrecioTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

