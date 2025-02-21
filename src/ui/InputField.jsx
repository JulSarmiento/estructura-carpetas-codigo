/**
 * Componente de campo de entrada que renderiza un elemento <input> con soporte para auto-completado y registro de formularios.
 *
 * @param {import("react").InputHTMLAttributes<HTMLInputElement>} props - Las propiedades del componente.
 * @param {'text' | 'email' | 'password'} props.type - El tipo de entrada (por ejemplo, 'text', 'email', 'password').
 * @param {(value: string, options: object) => void} [props.register] - Objeto de registro proporcionado por react-hook-form para manejar la validación y el registro del campo.
 * @param {object} [props.rest] - Cualquier otra propiedad que se pasará al elemento <input>.
 * @returns {import("react").JSX.Element} - El componente InputField
 *
 * @example
 * // Uso con react-hook-form
 * import { useForm } from 'react-hook-form';
 * import InputField from './InputField';
 *
 * function MyForm() {
 *   const { register, handleSubmit } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <InputField type="email" register={register('email')} placeholder="Correo electrónico" />
 *       <InputField type="password" register={register('password')} placeholder="Contraseña" />
 *       <button type="submit">Enviar</button>
 *     </form>
 *   );
 * }
 *
 * @example
 * // Uso sin react-hook-form
 * import InputField from './InputField';
 *
 * function MyForm() {
 *   return (
 *     <form>
 *       <InputField type="text" placeholder="Nombre de usuario" />
 *       <InputField type="password" placeholder="Contraseña" />
 *       <button type="submit">Enviar</button>
 *     </form>
 *   );
 * }
 */
export default function InputField({ type, register, ...props }) {
  const autoCompleteMap = {
    email: 'email',
    password: 'password',
    newPassword: 'newPassword',
    username: 'username',
  };

  return (
    <input
      type={type}
      autoComplete={autoCompleteMap[type] ?? 'off'}
      className="w-full rounded-md border border-neutral px-5 py-2 outline-none"
      {...props}
      {...(register ?? {})}
    />
  );
}
