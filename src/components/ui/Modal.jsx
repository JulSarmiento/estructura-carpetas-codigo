/**
 * Componente Modal que muestra un contenedor modal en la pantalla.
 *
 * @param {object} props - Propiedades del componente.
 * @param {import("react").ReactNode} props.children - Contenido a mostrar dentro del modal.
 * @param {string} [props.className] - Clases adicionales para personalizar el estilo del modal.
 *
 * @example
 * // Uso básico del componente Modal
 * <Modal>
 *   <div>Contenido del modal</div>
 * </Modal>
 *
 * @example
 * // Uso del componente Modal con clases adicionales
 * <Modal className="custom-class">
 *   <div>Contenido del modal con estilo personalizado</div>
 * </Modal>
 */
export default function Modal({ children, className }) {
  return (
    <section
      className={`fixed left-0 top-0 z-40 h-screen w-full bg-black/45 ${className ?? 'flex animate-fadeIn items-start justify-end'}`}
    >
      {children}
    </section>
  );
}
