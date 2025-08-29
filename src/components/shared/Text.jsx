const Text = ({children, tag, strong, className}) => {
    const Tag = tag || "p"

    return (
        <Tag className={className}><strong>{strong}</strong>{children}</Tag>
    )
}

export default Text;