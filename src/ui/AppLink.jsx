import { Link } from 'react-router-dom';

/**
 * Componente AppLink
 *
 * Este componente renderiza un enlace utilizando el componente Link de React Router.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {ReactNode} props.children - Los elementos hijos que se renderizarán dentro del enlace.
 * @param {string} [props.className] - Clases CSS adicionales para el enlace.
 * @param {() => void} [props.onClick] - Función que se ejecutará al hacer clic en el enlace.
 * @param {string} props.to - La ruta a la que el enlace debe navegar.
 * @param {string} [props.target] - Define dónde se abrirá el enlace (por ejemplo, "_blank" para una nueva pestaña).
 *
 * @example
 * // Uso básico
 * <AppLink to="/home">Ir a Home</AppLink>
 *
 * @example
 * // Uso con clase CSS adicional y función onClick
 * <AppLink to="/profile" className="custom-class" onClick={() => console.log('Clicked!')}>
 *   Ir a Perfil
 * </AppLink>
 *
 * @example
 * // Uso con target para abrir en una nueva pestaña
 * <AppLink to="https://example.com" target="_blank">
 *   Ir a Example.com
 * </AppLink>
 */
export default function AppLink({ children, className, onClick, to, target }) {
  return (
    <Link
      onClick={onClick}
      target={target}
      rel={target && 'noreferrer'}
      to={to}
      className={`flex items-center hover:brightness-110 ${className ?? 'gap-2 px-4 py-3 text-neutral-light'}`}
    >
      {children}
    </Link>
  );
}
