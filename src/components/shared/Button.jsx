const Button = ({type="button", children, onClick, disabled}) => {
    return (
        <button disabled={disabled} type={type} onClick={onClick}>{children}</button>
    )
}

export default Button;