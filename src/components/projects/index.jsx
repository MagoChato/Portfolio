import styled from "styled-components";
import mago from "../../assets/mago.jpg";

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 70vw;
  border: 4px solid var(--cor-de-borda);
  border-radius: 49px 49px 0 0;
  border-bottom: none;
  h3 {
    color: var(--cor-da-fonte);
    margin-top: 2em;
  }
  div {
    padding: 3em;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 0;
      color: var(--cor-da-fonte);
      h4 {
        padding: 0.2em 0;
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20em;
        background-color: var(--cor-de-fundo2);
        border-radius: 49px;
        padding: 1em 0%;
        list-style: disc;
        ul {
          width: 60%;
          display: flex;
          flex-direction: column;
          li {
            width: max-content;
            padding: 0.3em 0;
            display: list-item;
          }
        }
        img {
          height: 10em;
          border-radius: 29px;
          margin: 1em 0;
          width: 12em;
        }
        a {
          padding: 1em;
          background-color: var(--cor-secundaria);
          color: var(--cor-da-fonte);
          text-decoration: none;
          font-weight: 700;
          border-radius: 19px;
          width: 10em;
          margin: 0.4em 0;
        }
      }
    }
  }
  .projetoContainer {
    gap: 4em 2em;
  }
`;

function Projects() {
  const projetos = [
    {
      titulo: "Calculadora Nutricional",
      carater1: "Biblioteca alimentar",
      carater2: "Ferramenta de pesquisa",
      carater3: "Simples e prática",
      imgSrc: mago,
      aLabel: "Interessado?",
      ancora: "",
    },
    {
      titulo: "Calculadora Nutricional",
      carater1: "Biblioteca alimentar",
      carater2: "Ferramenta de pesquisa",
      carater3: "Simples e prática",
      imgSrc: mago,
      aLabel: "Interessado?",
      ancora: "",
    },
    {
      titulo: "Calculadora Nutricional",
      carater1: "Biblioteca alimentar",
      carater2: "Ferramenta de pesquisa",
      carater3: "Simples e prática",
      imgSrc: mago,
      aLabel: "Interessado?",
      ancora: "",
    },
    {
      titulo: "Calculadora Nutricional",
      carater1: "Biblioteca alimentar",
      carater2: "Ferramenta de pesquisa",
      carater3: "Simples e prática",
      imgSrc: mago,
      aLabel: "Interessado?",
      ancora: "",
    },
  ];
  return (
    <ProjectsSection id="projetos">
      <h3>Meus Projetos</h3>
      <div>
        <ul className="projetoContainer">
          {projetos.map((projeto) => (
            <li key={projeto.titulo}>
              <h4 className="azul">{projeto.titulo}</h4>
              <ul>
                <li>{projeto.carater1}</li>
                <li>{projeto.carater2}</li>
                <li>{projeto.carater3}</li>
              </ul>
              <img src={projeto.imgSrc}></img>
              <a href={projeto.ancora}>{projeto.aLabel}</a>
            </li>
          ))}
        </ul>
      </div>
    </ProjectsSection>
  );
}

export default Projects;
