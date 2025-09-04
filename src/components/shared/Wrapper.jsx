import clsx from "clsx";

const Wrapper = ({ children, style, className, variant, variantBackground, variantLog }) => {
  const variantsPrimary = {
    light: "bg-[var(--white)] text-[var(--black)]",
    dark: "bg-[var(--black)] text-[var(--white)]",
  };
  const variantsSecondary = {
    light: "bg-[var(--darkWhite)]",
    dark: "bg-[var(--lightBlack)]",
  };

  const activeUser = {
      login: "block",
      logout: "hidden"
    }

  const wrapperClass = clsx(
        variantsPrimary[variant],
        variantsSecondary[variantBackground],
        activeUser[variantLog],
        className
    )

  return (
    <div style={style} className={wrapperClass}>
      {children}
    </div>
  );
};

export default Wrapper;
