import styled from "styled-components";
import mago from "../../assets/mago.jpg";
import Linkedin from "../../assets/logo-linkedin.svg";
import Download from "../../assets/cloud-download-outline.svg";

const AboutMeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4em;
  .container-foto {
    width: 20em;
    height: 18em;
    flex-direction: column;
    padding: 1.4em;
    border: 2px solid var(--cor-de-borda);
    border-radius: 49px;
    background-color: var(--cor-de-fundo2);
    color: var(--cor-de-borda);
    font-size: 1.2rem;
    display: flex;
    align-items: start;
    justify-content: center;
    img {
      align-self: center;
      border-radius: 49px;
      height: 12em;
      width: 80%;
    }
  }
  .sobre-mim {
    width: 50em;
    color: var(--cor-da-fonte);
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
  .botoes-link {
    display: flex;
    gap: 2em;
    a {
      text-decoration: none;
    }
    button {
      padding: 0.6em;
      border-radius: 49px;
      border: none;
      width: 10em;
      font-size: 1rem;
      color: var(--cor-da-fonte);
      display: flex;
      justify-content: center;
      gap: 0.3em;
      &:hover {
        cursor: pointer;
      }
    }
    .linkedin {
      background-color: #044ce6;
    }
    .curriculo {
      background-color: var(--cor-de-fundo2);
      border: 1px solid var(--cor-de-borda);
    }
  }
`;

function AboutMe() {
  return (
    <AboutMeSection>
      <div className="container-foto" id="contato">
        <p>
          &lt;<span className="azul">div</span>&gt;
        </p>
        <p>
          &nbsp;&nbsp;&lt;<span className="azul">img</span>
        </p>
        <img src={mago} />
        &nbsp;&nbsp;/&gt;
        <p>
          &lt;/<span className="azul">div</span>&gt;
        </p>
      </div>
      <div className="sobre-mim">
        <h3>Sobre mim</h3>
        <h4>Porto Alegre, Rio Grande do Sul</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          libero fringilla, lacinia nisl eu, luctus justo. Nam purus augue,
          efficitur id auctor rhoncus, luctus lobortis orci. Curabitur in nulla
          nec sapien dignissim elementum eget bibendum dui. Fusce ut neque
          justo. Curabitur sit amet est tortor. Nullam risus ipsum, finibus et
          pretium ut, consequat ut tellus. Morbi pellentesque venenatis enim ac
          semper. Ut vitae lectus dolor.
        </p>
        <div className="botoes-link">
          <a href="https://www.linkedin.com/in/lucas-casagrande-68bbbb256/">
            <button className="linkedin">
              <ion-icon src={Linkedin} />
              Linkedin
            </button>
          </a>
          <a href="">
            <button className="curriculo">
              <ion-icon src={Download} />
              Curriculo
            </button>
          </a>
        </div>
      </div>
    </AboutMeSection>
  );
}

export default AboutMe;
