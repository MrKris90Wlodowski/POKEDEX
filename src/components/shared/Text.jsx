const Text = ({children, tag, strong}) => {
    const Tag = tag || "p"

    return (
        <Tag><strong>{strong}</strong>{children}</Tag>
    )
}

export default Text;