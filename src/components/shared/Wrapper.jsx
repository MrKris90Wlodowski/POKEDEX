// IMPORTS
import clsx from "clsx";

// CONSTANTS / CONFIG
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
  logout: "hidden",
};

// COMPONENT
const Wrapper = ({ children, style, className, variant, variantBackground, variantLog }) => {
  
  // COMPUTED VALUES / CLASSES
  const wrapperClass = clsx(
    variantsPrimary[variant],
    variantsSecondary[variantBackground],
    activeUser[variantLog],
    className
  );

  // RENDER
  return (
    <div style={style} className={wrapperClass}>
      {children}
    </div>
  );
};

// EXPORT
export default Wrapper;
