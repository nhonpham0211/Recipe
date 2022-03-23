import Home from "./Pages/Home";
import Category from "./Components/Category";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cuisine from "./Pages/Cuisine";
import Search from "./Components/Search";
import Searched from "./Pages/Searched";
import Recipe from "./Pages/Recipe";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import {AnimatePresence} from 'framer-motion';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>delicious</Logo>
        </Nav>
        <Search />
        <Category />
		<AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
		</AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export default App;
