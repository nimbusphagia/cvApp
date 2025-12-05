
function Input({ label, name, id, type, value = "", onChange }) {
  return (
    <div className="formGroup">
      <label htmlFor={id}>{label}:</label>

      {type !== "textarea" ? (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default Input;

