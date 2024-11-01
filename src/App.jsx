import styled from "styled-components";
import Header from "./components/header";
import Banner from "./components/banner";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

const AppContainer = styled.div`
  max-width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    width: 60vw;
    margin: 2em 2em 2em 2em;
  }
  main {
    width: 80vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6em;
  }
`;

function App() {
  return (
    <AppContainer id="topo">
      <div className="headerContainer">
        <Header />
      </div>
      <main>
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </AppContainer>
  );
}

export default App;
