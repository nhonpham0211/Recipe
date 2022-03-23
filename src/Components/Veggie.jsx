import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const res = await axios(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=9&tags=vegetarian`
      );
      localStorage.setItem("veggie", JSON.stringify(res.data.recipes));
      setVeggie(res.data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Out Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            drag: "free",
            gap: "5rem",
            pagination: false,
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
  }

  p{
	  position: absolute;
	  z-index: 10;
	  right: 50%,
	  bottom: 0%;
	  color: white;
	  width: 100%;
	  text-align: center;
	  font-weight: 600;
	  font-size: 1rem;
	  height: 150%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
