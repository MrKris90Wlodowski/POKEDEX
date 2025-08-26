const Input = ({ id, type, name, children, register, errors }) => {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input id={id} type={type} name={name}/>
    </div>
  );
};

export default Input;
