import { useState } from "react";
import Article from "./Article.jsx";
import Button from "./Button.jsx";
import Profile from "./Profile.jsx";

function Section({ title, fields, articles = [], many = true }) {
  const [items, setItems] = useState(articles);
  const [editingId, setEditingId] = useState(null);
  function addArticle() {
    const blank = fields.reduce((acc, f) => {
      acc[f.name] = "";
      return acc;
    }, { id: crypto.randomUUID() });

    setItems(prev => [...prev, blank]);
    setEditingId(blank.id);
  }
  function addProfile() {
    const blank = fields.reduce((acc, f) => {
      acc[f.name] = "";
      return acc;
    }, { id: crypto.randomUUID() });

    setItems(blank);
    setEditingId(blank.id);
  }
  function updateArticle(id, updatedValues) {
    setItems(prev => {
      if (Array.isArray(prev)) {
        return prev.map(item =>
          item.id === id ? { ...item, ...updatedValues } : item
        );
      } else if (prev && typeof prev === "object") {
        return prev.id === id ? { ...prev, ...updatedValues } : prev;
      } else {
        return prev;
      }
    });
  }
  function closeEditing() {
    setEditingId(null);
  }
  function deleteArticle(id) {
    setItems(prev => prev.filter(item => item.id !== id));
  }
  return (
    <section>
      <header>
        <h2>{title}</h2>
        {(!many && typeof items === "object" && !Array.isArray(items)) ? (
          <></>
        ) : (
          <Button
            text="Add"
            className="addBtn"
            handleSubmit={(!many ? addProfile : addArticle)}
          />
        )}
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
            onChange={updateArticle}
            handleDel={deleteArticle} />
        ))
      }

      {(!many && !Array.isArray(items)) &&
        <Profile
          id={items.id}
          fields={fields}
          values={items}
          editing={editingId === items.id}
          openEdit={() => setEditingId(items.id)}
          closeEdit={closeEditing}
          onChange={updateArticle} />}
    </section>
  );
}

export default Section;

