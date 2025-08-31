import clsx from "clsx"

const Button = ({
  type = "button",
  children,
  onClick,
  disabled,
  variant,
  className
}) => {

  const baseClass = "px-4 py-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
  const variants = {
    default: "bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out",
    light: "bg-[var(--white)] text-[var(--black)]",
    dark: "bg-[var(--black)] text-[var(--white)]"
  }

  const disabledClass = "bg-gray-500"

    const buttonClass = clsx(
      baseClass,
      disabled ? disabledClass : variants[variant],
      className
    )


  return (
    <button
      disabled={disabled}
      type={type}
      className={buttonClass}   
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;