import { Routes, Route, Link, Router } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Home from "./pages/home";
import Feed from "./pages/feed";
import Login from "./pages/login";
import Cadastrar from "./pages/cadastrar"

function App() {
  return (
  <div>
      <GlobalStyle />
      
      
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/feed" element={<Feed />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
  </div>
  );
}

export default App;
