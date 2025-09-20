// IMPORT
// brak dodatkowych importów

// VARIABLES
const Form = ({ onSubmit, className, children }) => {

  // RENDER
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
}

// EXPORT
export default Form
