import { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import editIcon from "../assets/icons/writing.png";

function Profile({ fields, values }) {
  const [editing, setEditing] = useState(false);
  const [inputs, setInputs] = useState(
    getInputs(values.name, values.email, values.phone, values.address, values.about)
  );

  const editImg = <img src={editIcon} />;

  function getInputs(name = "", email = "", phone = "", address = "", about = "") {
    return { name, email, phone, address, about };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    setInputs(values);
    setEditing(false);
  }

  return (
    <>
      {!editing && (
        <article className="profile">
          <div className="profileHeader">
            <h3>{inputs.name || "Your Name"}</h3>

            <Button
              text={editing ? "Cancel" : editImg}
              className="editBtn"
              handleSubmit={() => setEditing(prev => !prev)}
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
            f.type === "textarea" ? (
              <div key={f.id} className="formGroup">
                <label htmlFor={f.id}>{f.title}</label>
                <textarea
                  id={f.id}
                  name={f.name}
                  value={inputs[f.name]}
                  onChange={(e) =>
                    setInputs(prev => ({ ...prev, [f.name]: e.target.value }))
                  }
                />
              </div>
            ) : (
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
            )
          )}
        </Form>
      )}
    </>
  );
}

export default Profile;

