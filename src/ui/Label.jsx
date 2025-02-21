/**
 * Componente que representa una etiqueta `label`.
 * Muestra el nombre del campo de formulario y si
 * es obligatorio u opcional.
 * @param {import("react").LabelHTMLAttributes<HTMLLabelElement>} props - Las propiedades del componente.
 * @param {import("react").ReactNode} props.children - El nombre de la etiqueta. Puede ser un string o un nodo de React.
 * @param {string} props.label - El nombre único de la etiqueta.
 * @param {boolean} [props.required = true] - Muestra un asterisco si el campo es obligatorio u opcional.
 * @returns {JSX.Element} El componente Label.
 * @example
 * function Input() {
 *  return (
 *    <>
 *      <Label id="edad" required={false}>Edad</Label>
 *      <input type="number" id="edad" min={18} max={90} />
 *    </>
 *  )
 * }
 */
export default function Label({ children, id, required = true }) {
  return (
    <label className="block font-semibold text-primary-dark" htmlFor={id}>
      {children}{' '}
      {required && (
        <span className="text-[0.95em] font-bold text-danger">*</span>
      )}
    </label>
  );
}
