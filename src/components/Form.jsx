import Button from "./Button.jsx";
function Form({ children, handleSubmit }) {
  return (
    <form>
      {children}
      <Button
        text="Save"
        className="submitBtn"
        handleSubmit={handleSubmit}
      ></Button>
    </form>
  )
}
export default Form;
