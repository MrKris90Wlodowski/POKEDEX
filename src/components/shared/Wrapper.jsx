import clsx from "clsx";

const Wrapper = ({ children, style, className, variant, variantBackground }) => {
  const variantsPrimary = {
    light: "bg-[var(--white)] text-[var(--black)]",
    dark: "bg-[var(--black)] text-[var(--white)]",
  };
  const variantsSecondary = {
    light: "bg-[var(--darkWhite)]",
    dark: "bg-[var(--lightBlack)]",
  };

  const wrapperClass = clsx(
        variantsPrimary[variant],
        variantsSecondary[variantBackground],
        className
    )

  return (
    <div style={style} className={wrapperClass}>
      {children}
    </div>
  );
};

export default Wrapper;
