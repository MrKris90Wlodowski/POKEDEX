// IMPORT
import clsx from "clsx"

// VARIABLES
const Button = ({
  type = "button",
  children,
  onClick,
  disabled,
  variant,
  className
}) => {
  const baseClass = "px-4 py-2 rounded-2xl cursor-pointer transition duration-300 ease-in-out"
  const variants = {
    default: "bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out",
    light: "bg-[var(--white)] text-[var(--black)]",
    dark: "bg-[var(--black)] text-[var(--white)]"
  }
  const disabledClass = "bg-gray-500"

  // CLASS COMBINATION
  const buttonClass = clsx(
    baseClass,
    disabled ? disabledClass : variants[variant],
    className
  )

  // RENDER
  return (
    <button
      disabled={disabled}
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// EXPORT
export default Button
