import styled from "styled-components";

const BannerSection = styled.section`
  display: flex;
  padding: 4em;
  gap: 2em;
  justify-content: center;
  height: 20em;
  .sublinhado {
    border-bottom: 4px solid var(--cor-secundaria);
    line-height: 1.5em;
  }
  .front {
    width: 52em;
    color: var(--cor-da-fonte);
    margin: 1em 1em;
    h1 {
      font-size: 3.4rem;
      line-height: 3rem;
      font-weight: 800;
    }
    p {
      font-size: 2.4rem;
      font-weight: 700;
      margin-top: 1em;
    }
  }
  .code {
    margin: 1em 1em;
    width: 20em;
    padding: 0 1.4em;
    border: 2px solid var(--cor-de-borda);
    border-radius: 49px;
    background-color: var(--cor-de-fundo2);
    color: var(--cor-de-borda);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: var(--cor-de-borda);
      p {
        transition: 0.5s;
        &:hover {
          background-color: rgba(0, 218, 255, 0.2);
        }
      }
      .branco {
        color: var(--cor-da-fonte);
      }
    }
  }
`;

function Banner() {
  const navegacao = [
    {
      label: "Topo",
      to: "#topo",
    },
    {
      label: "Contato",
      to: "#contato",
    },
    {
      label: "Habilidades",
      to: "#habilidades",
    },
    {
      label: "Projetos",
      to: "#projetos",
    },
  ];
  return (
    <BannerSection>
      <div className="front">
        <h1>
          Olá, me chamo <span className="laranja">Lucas</span> e sou um
          desenvolvedor web.
        </h1>
        <p>
          <span className="sublinhado">
            Seja bem vindo ao meu Portifólio App!
          </span>
        </p>
      </div>
      <div className="code">
        <div className="codeContainer">
          <p>
            &lt;<span className="azul">nav</span>&gt;
          </p>
          {navegacao.map((direcao) => (
            <a key={direcao.label} href={direcao.to}>
              <p>
                &nbsp;&nbsp;&lt;
                <span className="azul">a </span>
                <span className="azul-claro">href=</span>
                <span className="laranja">&quot;{direcao.to}&quot;</span>&gt;
                <span className="branco">{direcao.label}</span>
                &lt;/<span className="azul">a</span>&gt;
              </p>
            </a>
          ))}
          <p>
            &lt;/<span className="azul">nav</span>&gt;
          </p>
        </div>
      </div>
    </BannerSection>
  );
}

export default Banner;
