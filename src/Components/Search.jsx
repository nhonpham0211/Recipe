import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleInputOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input type="text" value={input} onChange={handleInputOnChange} />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 2rem;
  position: relative;
  margin: 0 160px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
