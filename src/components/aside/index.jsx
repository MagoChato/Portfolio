import styled from "styled-components";

const AsideContainer = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 10em;
  border: 2px solid var(--cor-de-borda);
  border-bottom: none;
  border-top: none;
  nav {
    position: sticky;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    a {
      text-decoration: none;
      color: var(--cor-da-fonte);
      transition: 0.2s ease-in-out;
      &:hover {
        color: var(--cor-primaria);
      }
    }
  }
`;

function Aside() {
  return (
    <AsideContainer>
      <nav>
        <a href="#topo">Topo</a>
        <a href="#contato">Contato</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </AsideContainer>
  );
}

export default Aside;
