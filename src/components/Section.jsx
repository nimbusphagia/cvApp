import { useState } from "react";
import Article from "./Article.jsx";
import Button from "./Button.jsx";
import Profile from "./Profile.jsx";

function Section({ title, fields, articles = [], many = true }) {
  const [items, setItems] = useState(articles);
  const [editingId, setEditingId] = useState(null);

  function updateArticle(id, updatedValues) {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, ...updatedValues } : item
      )
    );
  }

  function addArticle() {
    const blank = fields.reduce((acc, f) => {
      acc[f.name] = "";
      return acc;
    }, { id: crypto.randomUUID() });

    setItems(prev => [...prev, blank]);

    setEditingId(blank.id);
  }

  function closeEditing() {
    setEditingId(null);
  }

  return (
    <section>
      <header>
        <h2>{title}</h2>

        <Button
          text="Add"
          className="addBtn"
          handleSubmit={addArticle}
        />
      </header>

      <hr />

      {many &&
        items.map(item => (
          <Article
            key={item.id}
            id={item.id}
            fields={fields}
            values={item}
            editing={editingId === item.id}
            openEdit={() => setEditingId(item.id)}
            closeEdit={closeEditing}
            onChange={updateArticle} />
        ))
      }

      {!many && <Profile fields={fields} values={items} />}
    </section>
  );
}

export default Section;

