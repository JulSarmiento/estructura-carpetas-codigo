/**
 * Componente de botón reutilizable.
 *
 * @param {import("react").ButtonHTMLAttributes<HTMLButtonElement>} props - Propiedades del componente.
 * @param {import("react").ReactNode} props.children - Contenido del botón.
 * @param {string} [props.className] - Clases CSS adicionales para el botón.
 * @param {() => void} [props.onClick] - Función que se ejecuta al hacer clic en el botón.
 * @param {object} [props.rest] - Propiedades adicionales que se pueden pasar al componente.
 * @returns {import("react").JSX.Element} Elemento JSX que representa un botón.
 *
 * @example
 * // Uso básico
 * <Button onClick={() => alert('Botón clicado!')}>Clic aquí</Button>
 *
 * @example
 * // Con clases CSS adicionales
 * <Button className="bg-blue-500 text-white" onClick={() => alert('Botón azul clicado!')}>
 *   Clic aquí
 * </Button>
 */
export default function Button({ children, className, onClick, ...props }) {
  return (
    <button
      className={`py-1 font-semibold outline-none hover:cursor-pointer ${className ?? 'rounded'}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
