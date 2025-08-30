import clsx from "clsx"

const Button = ({
  type = "button",
  children,
  onClick,
  disabled,
}) => {

    const buttonClass = clsx(
        "px-4 py-2 text-white rounded-lg cursor-pointer ", 
        disabled 
      ? "bg-gray-500"
      : "bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out"
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