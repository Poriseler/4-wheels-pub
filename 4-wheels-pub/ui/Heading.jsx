/* eslint-disable react/prop-types */
import styled from "styled-components";

const H2 = styled.h2`
  border-bottom: 1px solid grey;
  text-align: center;
  width: ${(props) =>
    props.as === "h1" ? "80%" : props.as === "h2" ? "50%" : "30%"};
  font-size: ${(props) =>
    props.as === "h1" ? "3rem" : props.as === "h2" ? "2rem" : "1rem"};
`;

function Heading({ children, as = "h1" }) {
  return <H2 as={as}>{children}</H2>;
}

export default Heading;
