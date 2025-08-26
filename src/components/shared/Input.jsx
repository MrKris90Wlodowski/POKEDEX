const Input = ({ id, type, name, children, register, errors, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input id={id} type={type} name={name} placeholder={placeholder} {...(register ? register(name) : {})}/>
      {errors?.[id] && <p style={{color: "red"}}>{errors[id].message}</p>}
    </div>
  );
};

export default Input;
