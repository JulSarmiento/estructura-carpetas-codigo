import { useContext } from 'react';
import CarritoContext from '../Context/CarritoContext';

/**
 * @function useCarrito
 * @description Hook personalizado para acceder al contexto del carrito.
 * @returns {object} El contexto del carrito con el estado y las funciones del carrito.
 * @throws {Error} Si se intenta usar el hook fuera de un `CarritoProvider`.
 */
const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider');
  }
  return context;
};

export default useCarrito;