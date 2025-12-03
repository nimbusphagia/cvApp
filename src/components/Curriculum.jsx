import { useState } from "react";
import cvFields from "../data/cvFields.js";
import Section from "./Section.jsx";
function Curriculum({ handleDisplay }) {
  const [editing, setEditing] = useState({ personal: false, education: false, work: false });

  const handleEditing = (key) => {
    setEditing(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="editingArea">
      <Section
        title="Profile"
        handleSubmit={handleDisplay}
        fields={cvFields.personal}
        editing={editing.personal}
        handleEdit={() => handleEditing("personal")}

      ></Section>

      <Section
        title="Education"
        handleSubmit={handleDisplay}
        fields={cvFields.education}
        editing={editing.education}
        handleEdit={() => handleEditing("education")}
      ></Section>

      <Section
        title="Work Experience"
        handleSubmit={handleDisplay}
        fields={cvFields.work}
        editing={editing.work}
        handleEdit={() => handleEditing("work")}
      ></Section>
    </section>
  )
}
export default Curriculum;
