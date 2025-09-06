import clsx from "clsx";

const Input = ({ id, type, name, children, register, value, errors, placeholder, onChange, variant, className  }) => {
  const variants = {
    light: "bg-[var(--white)] text-[var(--black)] border-[var(--black)] focus:ring-0 focus:bg-[var(--darkWhite)]",
    dark: "bg-[var(--black)] text-[var(--white)] border-[var(--white)] focus:ring-0 focus:bg-[var(--lightBlack)]",
  }

  const inputClass = clsx(
    variants[variant],
    className
  )

  return (
    <div className="flex flex-col relative">
      <label htmlFor={name} className="font-medium">{children}</label>
      <input id={id} type={type} name={name} placeholder={placeholder} className={inputClass} value={value} onChange={onChange} {...(register ? register(name) : {})}/>
      {errors?.[id] && <p className="text-red-700 font-bold absolute left-0 top-16">{errors[id].message}</p>}
    </div>
  );
};

export default Input;
