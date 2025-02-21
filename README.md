# Informe de Estandarización de Código

## 📌 ¿Por qué Estandarizar?

Estandarizar el código garantiza consistencia, escalabilidad y colaboración eficiente en el proyecto. Facilita la lectura, reduce errores y agiliza el mantenimiento. Además, mejora el rendimiento al evitar estilos innecesarios y valores quemados, optimizando la reutilización de componentes y textos. Implementar buenas prácticas refleja profesionalismo y calidad, asegurando un desarrollo más organizado y sostenible. 🚀

## 📂 Reglas de Nomenclatura y Formato

### 1. Nombres de Carpetas
✅ **Formato:** kebab-case (minúsculas y separadas por guiones).

#### 👍 Ejemplos Correctos:
```
components/
ui/
contexts/
providers/
```

#### ❌ Evitar:
```
Components/     ❌ (mayúscula innecesaria)
UIComponents/   ❌ (sin kebab-case)
ContextFiles/   ❌ (nombre muy largo)
```

### 2. Nombres de Archivos

#### 💽 Componentes React (.jsx)
✅ **Formato:** PascalCase (Cada palabra inicia con mayúscula).

#### 👍 Ejemplos Correctos:
```
Header.jsx
ProductCard.jsx
UserProfile.jsx
```

#### ❌ Evitar:
```
header.jsx              ❌ (debe iniciar en mayúscula).
product-card.jsx        ❌ (kebab-case no recomendado para componentes).
Userprofile.jsx         ❌ (inconsistencia en mayúsculas).
```

#### 🔗 Hooks Personalizados (.jsx)
✅ **Formato:** camelCase y deben iniciar con `use` (convención de React).

#### 👍 Ejemplos Correctos:
```
useCart.jsx
useFetchData.jsx
useAuth.jsx
```

#### ❌ Evitar:
```
UseCart.js    ❌ (mayúscula innecesaria).
cartHook.js   ❌ (sin el prefijo use).
usecart.js    ❌ (iniciar en minúscula la segunda palabra).
```

#### 📊 Context API (.jsx, .tsx)
✅ **Formato:** PascalCase con `Context` al final.

#### 👍 Ejemplos Correctos:
```
CartContext.jsx
AuthContext.jsx
```

#### ❌ Evitar:
```
cartContext.jsx ❌ (debe ser PascalCase).
Authcontext.jsx ❌ (inconsistencia en mayúsculas).
```

#### 🛠️ Utilidades, Helpers y Services (.js, .ts)
✅ **Formato:** camelCase.

#### 👍 Ejemplos Correctos:
```
formatDate.js
calculateTotal.js
validateInput.js
```

#### ❌ Evitar:
```
FormatDate.js   ❌ (no debe ser PascalCase).
format_date.js  ❌ (no usar guiones bajos).
format-date.js  ❌ (no usar guiones).
```

### 3. Idioma del Código y Comentarios
✅ Todo el código y nombres de archivos deben estar en **inglés**.

#### 👍 Ejemplos Correctos:
```
ProductCard.jsx
CartContext.jsx
useAuth.js
validateInput.js
```

#### ❌ Evitar archivos o código en español:
```
TarjetaProducto.jsx   ❌
CarritoContext.jsx    ❌
validarEntrada.js     ❌
```

⚠️ **Excepción:** Variables de entorno y documentación interna pueden estar en español si es necesario.

## 🌟 Otros Estándares

✅ **Tailwind:**
- Usar kebab-case para nombres de clases en Tailwind: `primary-dark`.
- **Tailwind con Temas Dinámicos (3.4.17):** Se reemplazan los colores base por variables personalizables:

```js
colors: {
  complementary: {
    DEFAULT: 'var(--tw-complementary-default)',
    dark: 'var(--tw-complementary-dark)',
    tienda: 'var(--tw-complementary-tienda)',
  },
  primary: {
    DEFAULT: 'var(--tw-primary-default)',
    dark: 'var(--tw-primary-dark)',
    tienda: 'var(--tw-primary-tienda)',
  },
  secondary: {
    DEFAULT: 'var(--tw-secondary-default)',
    dark: 'var(--tw-secondary-dark)',
    tienda: 'var(--tw-secondary-tienda)',
  },
  tertiary: {
    DEFAULT: 'var(--tw-tertiary-default)',
    dark: 'var(--tw-complementary-dark)',
  },
  transparent: 'transparent',
}
```
- **Tailwind con Temas Dinámicos (4.0):** (Pendiente por terminar validaciones).

✅ **Comillas simples:** Se aplican comillas simples para strings o imports.

✅ **Exports:**

```js
export default InputGroups() {
  // cuando exportamos un único elemento en el archivo, como componentes.
}

export default getValues()

export const getValues = () => {
  // cuando exportamos varias funciones en un mismo archivo y funciones tipo utils, custom Hooks.
}
```

✅ **Variables en JavaScript:**
- `camelCase` para variables y funciones: `totalPrice`, `fetchData()`.
- `UPPER_SNAKE_CASE` para constantes globales: `API_URL`.

✅ **Manejo de Estilos y Plantillas:**
- Se reemplazan los colores de Tailwind sin extender para evitar el uso de los predeterminados.
- No se deben quemar estilos en los componentes, asegurando su reutilización.
- Uso de librerías como **i18n** para remover los textos fijos y garantizar soporte multilenguaje.

## 🔢 Resumen Rápido
---

| Tipo                  | Formato          | Ejemplo Correcto           |
|---------------------- |------------------|----------------------------|
| Carpetas              | kebab-case       | `components/`, `utils/`    |
| Componentes           | PascalCase       | `ProductCard.jsx`          |
| Hooks                 | camelCase (use)  | `useCart.js`               |
| Context API           | PascalCase       | `CartContext.jsx`          |
| Funciones y Helpers   | camelCase        | `formatDate.js`            |
| Variables Globales    | UPPER_SNAKE_CASE | `API_URL`                  |
| Estilos (Tailwind)    | kebab-case       | `primary`, `primary-dark`  |
| Idioma del código     | Inglés           | `ProductCard.jsx`          |

---


