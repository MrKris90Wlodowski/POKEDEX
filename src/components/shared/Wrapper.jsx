const Wrapper = ({children, style, className}) => {
    return (
        <div style={style} className={className}>
            {children}
        </div>
    )
}

export default Wrapper;