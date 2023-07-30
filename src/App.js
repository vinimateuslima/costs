import { BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/newproject" element={<NewProject />} />
        <Route path="/project/:id" element={<Project />} />
      </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
