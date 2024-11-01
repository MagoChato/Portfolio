import styled from "styled-components";
import html5 from "../../assets/logo-html5.svg";
import css3 from "../../assets/logo-css3.svg";
import javascript from "../../assets/logo-javascript.svg";
import typescript from "../../assets/logo-typescript.svg";
import react from "../../assets/logo-react.svg";
import sass from "../../assets/logo-sass.svg";
import tailwindcss from "../../assets/logo-tailwind.svg";

const SkillSection = styled.section`
  display: flex;
  width: 60vw;
  padding: 4em;
  justify-content: center;
  color: var(--cor-de-borda);
  gap: 20em;
  margin: 1em;
  background-color: var(--cor-de-fundo2);
  border: 2px solid var(--cor-de-borda);
  border-radius: 89px;
  ul {
    font-size: 72px;
    display: flex;
    margin-top: 4rem;
    span {
      display: flex;
      color: var(--cor-secundaria);
    }
  }
  li {
    list-style: none;
    font-size: 72px;
    margin: 1.6rem 1rem 0 1rem;
  }
`;

function Skills() {
  const skills = [
    html5,
    css3,
    javascript,
    typescript,
    react,
    sass,
    tailwindcss,
  ];
  return (
    <SkillSection id="habilidades">
      <h3 className="azul">
        const&nbsp;<span className="azul-claro">Habilidades</span>&nbsp;
        <span className="fonte-escura">=</span>
      </h3>
      <ul className="rosa">
        [
        <span>
          &quot;
          {skills.map((skill) => (
            <li key={skill}>
              <ion-icon src={skill} />
            </li>
          ))}
          &quot;
        </span>
        ]
      </ul>
    </SkillSection>
  );
}

export default Skills;
