import clsx from "clsx";

const Wrapper = ({ children, style, className, variant }) => {
  const variants = {
    light: "bg-[var(--white)] text-[var(--black)]",
    dark: "bg-[var(--black)] text-[var(--white)]",
  };

  const wrapperClass = clsx(
        variants[variant],
        className
    )

  return (
    <div style={style} className={wrapperClass}>
      {children}
    </div>
  );
};

export default Wrapper;
