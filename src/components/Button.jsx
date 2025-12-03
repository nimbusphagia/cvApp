function Button({ text, className, handleSubmit = null }) {
  return (
    <button
      onClick={handleSubmit}
      className={className}
    >
      {text}
    </button>
  )
}
export default Button;
