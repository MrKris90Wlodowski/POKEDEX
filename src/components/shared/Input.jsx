const Input = ({ id, type, name, children }) => {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input id={id} type={type} name={name}/>
    </div>
  );
};

export default Input;
