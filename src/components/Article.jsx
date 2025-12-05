
import { useState, useEffect } from "react";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import editIcon from "../assets/icons/writing.png";

function Article({ id, fields, values, editing, openEdit, closeEdit, onChange }) {
  const editImg = <img src={editIcon} />;
  const [inputs, setInputs] = useState(values);

  useEffect(() => {
    setInputs(values);
  }, [values]);

  function handleSubmit(e) {
    e.preventDefault();
    const newValues = Object.fromEntries(new FormData(e.currentTarget));

    onChange(id, newValues);
    closeEdit();
  }

  function formatDate(d) {
    if (!d || d === "Present") return d;
    if (d === "Today") return d;

    const [yyyy, mm, dd] = d.split("-");
    return `${dd}-${mm}-${yyyy}`;
  }

  function formatContent(v) {
    const toValue = v.to?.trim() === "" ? "Today" : v.to;

    return {
      title: v.title,
      date: `${formatDate(v.from)} - ${formatDate(toValue)}`,
      details: [v.institution, v.location],
      description: v.description
    };
  }

  const content = formatContent(inputs);

  return (
    <>
      {/* DISPLAY MODE */}
      {!editing && (
        <article>
          <div className="artHeader">
            <div className="artTitle">
              <h3>{content.title}</h3>
              <Button
                text={editImg}
                className="editBtn"
                handleSubmit={openEdit} />
            </div>

            <p className="artDuration">{content.date}</p>
          </div>

          <div className="artDetails">
            {content.details.map((d, i) => (
              <p className="artDetail" key={i}>{d}</p>
            ))}
          </div>

          <div className="artDesc">
            <p>{content.description}</p>
          </div>
        </article>
      )}

      {/* EDIT MODE */}
      {editing && (
        <Form submit={handleSubmit}>
          {fields.map(f => (
            <Input
              key={f.id}
              label={f.title}
              id={f.id}
              type={f.type}
              name={f.name}
              value={inputs[f.name]}
              onChange={e =>
                setInputs(prev => ({ ...prev, [f.name]: e.target.value }))
              }
            />
          ))}
        </Form>
      )}
    </>
  );
}

export default Article;

