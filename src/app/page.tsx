import Home from "./pages/Home"
import Header from "./components/header"
import Skills from "./pages/Skills";
import Projects from "./pages/Projects"
import ContactMe from "./pages/ContactMe";

export default function Main() {
  return (
    <>
        <Header />
        <Home />
        <Skills />
        <Projects />
        <ContactMe />
    </>
  );
}
