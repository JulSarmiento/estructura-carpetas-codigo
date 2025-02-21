/**
 * Componente Loader que muestra un indicador de carga animado.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} [props.className] - Clase CSS adicional para personalizar el estilo del loader.
 * @returns {import("react").JSX.Element} Elemento JSX que representa el loader.
 *
 * @example
 * // Uso básico del componente Loader
 * <Loader />
 *
 * @example
 * // Uso del componente Loader con una clase CSS personalizada
 * <Loader className="w-16 h-16 border-red-500" />
 */
export default function Loader({ className }) {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-b-transparent ${className ?? 'size-8 border-primary-light'}`}
    ></div>
  );
}
