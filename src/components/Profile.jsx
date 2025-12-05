import { useState, useEffect } from "react";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import editIcon from "../assets/icons/writing.png";

function Profile({ id, fields, values, editing, openEdit, closeEdit, onChange }) {
  const [inputs, setInputs] = useState(values);
  useEffect(() => {
    setInputs(values);
  }, [values]);

  const editImg = <img src={editIcon} />;

  function handleSubmit(e) {
    e.preventDefault();
    const newValues = Object.fromEntries(new FormData(e.currentTarget));

    onChange(id, newValues);
    closeEdit();
  }

  return (
    <>
      {!editing && (
        <article className="profile">
          <div className="profileHeader">
            <h3>{inputs.name}</h3>

            <Button
              text={editImg}
              className="editBtn"
              handleSubmit={openEdit}
            />
          </div>

          <div className="profileDetails">
            {inputs.phone && <p>{inputs.phone}</p>}
            {inputs.address && <p>{inputs.address}</p>}
            {inputs.email && <p>{inputs.email}</p>}
          </div>

          {inputs.about && (
            <p className="profileAbout">{inputs.about}</p>
          )}
        </article>
      )}

      {editing && (
        <Form submit={handleSubmit}>
          {fields.map((f) =>
            <Input
              key={f.id}
              label={f.title}
              id={f.id}
              type={f.type}
              name={f.name}
              value={inputs[f.name]}
              onChange={(e) =>
                setInputs(prev => ({ ...prev, [f.name]: e.target.value }))
              }
            />
          )}
        </Form>
      )}
    </>
  );
}

export default Profile;

