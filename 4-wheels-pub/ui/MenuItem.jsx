/* eslint-disable react/prop-types */
import styled from "styled-components";

const Div = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: ${(props) =>
    props.horizontal === "true" ? "row" : "column"};
`;
const StyledDescription = styled.p`
  width: 80%;
  margin: 0;
  font-size: 0.9rem;
`;

const P = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3px;
  font-weight: 600;
`;

function MenuItem({ name, description, price }) {
  return (
    <Div horizontal="true">
      <Div horizontal="false">
        <P>{name}</P>
        <StyledDescription>{description}</StyledDescription>
      </Div>
      <P>{price}</P>
    </Div>
  );
}

export default MenuItem;
