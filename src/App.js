import { BrowserRouter } from "react-router-dom";

// views
import Home from "views/Home/Home";
import News from "views/News/News";
import Contact from "views/Contact/Contact";
import Projects from "views/Projects/Projects";
import Details from "views/Details/Details";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/details:id" element={<Details />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
