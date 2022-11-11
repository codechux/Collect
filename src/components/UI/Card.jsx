import styled from "styled-components";

const Cards = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  margin: 2rem auto;
  width: 50%;
`;

const Card = (props) => {
  return <Cards>{props.children}</Cards>;
};

export default Card;
