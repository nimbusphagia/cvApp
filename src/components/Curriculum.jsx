import cvFields from "../data/cvFields.js";
import Section from "./Section.jsx";
import cvContent from "../data/cvContent.js";
function Curriculum() {
  return (
    <main className="Curriculum floatingLayout">
      <Section
        title="About me"
        fields={cvFields.personal}
        articles={cvContent.personal}
        many={false}
      ></Section>

      <Section
        title="Education"
        fields={cvFields.education}
        articles={cvContent.education}
      ></Section>

      <Section
        title="Work Experience"
        fields={cvFields.work}
        articles={cvContent.work}
      ></Section>
    </main>
  )
}
export default Curriculum;
