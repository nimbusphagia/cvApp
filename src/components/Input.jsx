
function Input({ name, id, type }) {
  return (
    <div className="formGroup">
      <label htmlFor={id}>{name}:</label>

      {type !== "textarea" ? (
        <input id={id} type={type} />
      ) : (
        <textarea id={id}></textarea>
      )}
    </div>
  );
}

export default Input;

