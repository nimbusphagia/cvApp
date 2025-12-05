import Button from "./Button.jsx";
function Form({ children, submit }) {
  return (
    <form className="floatingLayout" onSubmit={submit}>
      <h3>Editing</h3>
      <section>
        {children}
      </section>
      <Button
        text="Save"
        className="submitBtn"
      ></Button>
    </form>
  )
}
export default Form;
