
import { ThemeProvider } from 'styled-components';
import About from './components/sections/About';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import  Navigation  from './components/Navigation';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
import GlobalStyle from './styles/GlobalStyles';
import {light} from "./styles/Themes";

function App() {
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={light}>
    <Navigation/>
    <Home />
    <About/>
    <Roadmap/>
    <Showcase/>
    <Team/>
    <Faq/>
    <Footer/>
    </ThemeProvider>
    </>
  );
}

export default App;
