import Form from "./Form.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
function Section({ title, handleSubmit, fields, editing, handleEdit }) {
  return (
    <section>
      <header>
        <h2 >{title}</h2>
        <Button
          text="edit"
          className="editBtn"
          handleSubmit={handleEdit}
        ></Button>
      </header>
      {editing && <Form
        onSubmit={handleSubmit}
      >
        {fields.map(f =>
          <Input
            name={f.name}
            id={f.id}
            type={f.type}
            key={f.id}
          ></Input>
        )}
      </Form>}

    </section>)
}
export default Section;
