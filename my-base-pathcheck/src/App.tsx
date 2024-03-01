import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Home";

function App() {
  const basepath = process.env.REACT_APP_BASEPATH || "/";
  const name = process.env.REACT_APP_NAME;

  
  return (
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <nav>
          <h1>{name} </h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="services">Services</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<h1>Services</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
