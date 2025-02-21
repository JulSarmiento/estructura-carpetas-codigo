/**
 * Componente que representa un Logo personalizable.
 * @param {import("react").ImgHTMLAttributes<HTMLImageElement>} props - Las propiedades del componente.
 * @param {string} props.icon - El origen del recurso img a usar.
 * @param {string} props.alt - El nombre de la imagen si el src no es encontrado.
 * @param {string} [props.className] - Clases CSS para personalizar el componente.
 * @param {string} [props.title] - El nombre de una imagen interactuable.
 * @returns {import("react").JSX.Element} El componente Logo personalizable.
 * @example
 * <Logo
 *    icon="https://www.logoapp.com/example"
 *    alt="Logo"
 *    className="size-20"
 *    title="Logo"
 * />
 */
export default function Logo({ icon, alt, className, title }) {
  return (
    <img
      src={icon}
      alt={alt}
      className={className ?? 'w-40 min-w-40 lg:w-60 md:w-56 md:min-w-56'}
      title={title}
    />
  );
}
