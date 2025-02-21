import { createContext } from 'react';

/**
 * @file CarritoContext.jsx
 * @module Context
 * @description Este archivo define el contexto para la gestión del carrito de compras en la aplicación.
 * Utiliza el hook `createContext` de React para crear un contexto que permite compartir el estado del carrito
 * y las funciones relacionadas con la manipulación del mismo entre diferentes componentes de la aplicación,
 * sin necesidad de pasar props manualmente a través de cada nivel del árbol de componentes.
 */

// Crear el contexto del carrito
const CarritoContext = createContext();

export default CarritoContext;