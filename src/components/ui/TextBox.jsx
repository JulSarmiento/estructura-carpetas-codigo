/**
 * Componente de entrada de texto reutilizable.
 *
 * @param {import("react").InputHTMLAttributes<HTMLInputElement>} props - Propiedades del componente.
 * @param {string} [props.className] - Clases CSS adicionales para el componente.
 * @param {string} [props.type='text'] - Tipo de entrada (por defecto es 'text').
 * @returns {import("react").JSX.Element} Elemento de entrada de texto.
 *
 * @example
 * <TextBox
 *   className="mi-clase-personalizada"
 *   placeholder="Introduce tu nombre"
 *   onInput={(e) => console.log(e.target.value)}
 * />
 *
 * @example
 * <TextBox
 *   type="password"
 *   placeholder="Introduce tu contraseña"
 *   onInput={(e) => console.log(e.target.value)}
 * />
 */
export default function TextBox({
  className,
  type = 'text',
  ...props
}) {
  return (
    <input
      type={type}
      className={`font-semibold text-neutral-dark outline-none ${className ?? 'rounded-lg px-5 py-3'}`}
      {...props}
    />
  );
}
