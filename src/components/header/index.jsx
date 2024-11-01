import styled from "styled-components";
import Icon from "../../assets/sunny.svg";

const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  border: 4px solid var(--cor-de-borda);
  border-radius: 49px;
  padding: 1em 2em;
  background-color: var(--cor-de-fundo2);
  h2 {
    color: var(--cor-da-fonte);
    font-size: 2em;
    strong {
      color: var(--cor-primaria);
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 24em;
    align-items: center;
    nav {
      display: flex;
      justify-content: space-evenly;
      a {
        text-decoration: none;
        color: var(--cor-da-fonte);
        margin: 0.5rem;
        padding: 0 0.25rem;
        transition: 0.2s ease-in-out;
        &:hover {
          color: var(--cor-primaria);
        }
      }
    }
    button {
      background-color: var(--cor-de-fundo2);
      width: 32px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 49px;
      &:hover {
        background-color: var(--cor-de-borda);
      }
      transition: 300ms;
      ion-icon {
        color: white;
        font-size: 32px;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderComponent>
      <h2>&lt;Casagrande&gt;</h2>
      <div>
        <nav>
          <a href="#contato">Contato</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
        </nav>
        <button>
          <ion-icon src={Icon} />
        </button>
      </div>
    </HeaderComponent>
  );
}

export default Header;
