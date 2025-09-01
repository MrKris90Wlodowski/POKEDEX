import clsx from "clsx";

const Input = ({ id, type, name, children, register, value, errors, placeholder, onChange, className  }) => {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input id={id} type={type} name={name} placeholder={placeholder} className={className} value={value} onChange={onChange} {...(register ? register(name) : {})}/>
      {errors?.[id] && <p style={{color: "red"}}>{errors[id].message}</p>}
    </div>
  );
};

export default Input;
