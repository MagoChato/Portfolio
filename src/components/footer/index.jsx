import styled from "styled-components";

const FooterComponent = styled.footer`
  background-color: var(--cor-de-fundo3);
  border-top: 3px solid var(--cor-de-borda);
  height: 4em;
  width: 100vw;
  display: flex;
  align-items: center;
  color: var(--cor-da-fonte);
  p {
    margin: auto;
  }
  .email {
    position: absolute;
    right: 11em;
    a {
      text-decoration: none;
      color: var(--cor-primaria);
    }
  }
`;

function Footer() {
  return (
    <FooterComponent>
      <p>Desenvolvido com carinho por Lucas Casagrande.</p>
      <p className="email">
        e-mail:{" "}
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmzjrjQPDMnbHHhdKlSSgZbnbhVxXFDnWBZhlNfqQDvQjdTVSdWPtdmgGXMrNNLKnrWdfk">
          casagran.lucas@gmail.com
        </a>
      </p>
    </FooterComponent>
  );
}

export default Footer;
