/**
 * Componente DropDown que renderiza un elemento select con opciones.
 *
 * @param {import("react").SelectHTMLAttributes<HTMLSelectElement>} props - Las propiedades del componente.
 * @param {Array<string>} props.options - Lista de opciones para el dropdown.
 * @param {string} [props.placeholder='Selecciona una opción'] - Texto de marcador de posición para la opción predeterminada.
 * @param {(value: string, options: object) => void} props.register - Propiedades de registro para formularios (por ejemplo, react-hook-form).
 * @param {object} [props.rest] - Cualquier otra propiedad adicional que se pasará al elemento select.
 * @returns {import("react").JSX.Element} - El componente DropDown.
 *
 * @example
 * // Ejemplo de uso con opciones y registro de formulario
 * import { useForm } from 'react-hook-form';
 *
 * function MyForm() {
 *   const { register, handleSubmit } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <DropDown
 *         options={['Opción 1', 'Opción 2', 'Opción 3']}
 *         placeholder="Selecciona una opción"
 *         register={register('miCampo')}
 *       />
 *       <button type="submit">Enviar</button>
 *     </form>
 *   );
 * }
 */
export default function DropDown({
  options,
  placeholder = 'Selecciona una opción',
  register,
  ...props
}) {
  const mappedOptions = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  return (
    <select
      className="w-full rounded-md border border-neutral px-5 py-2 outline-none"
      {...register}
      {...props}
    >
      <option value="">-- {placeholder} --</option>
      {mappedOptions}
    </select>
  );
}
