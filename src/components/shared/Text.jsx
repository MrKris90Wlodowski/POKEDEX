// VARIABLES
const Text = ({ children, tag, strong, className }) => {
  const Tag = tag || "p" // domyślny tag to <p>

  // RENDER
  return (
    <Tag className={className}>
      {strong && <strong>{strong}</strong>}
      {children}
    </Tag>
  )
}

// EXPORT
export default Text
