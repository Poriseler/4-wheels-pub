/* eslint-disable react/prop-types */
import styled from "styled-components";

const Img = styled.img`
  width: 80%;
  height: auto;
`;

const P = styled.p`
  padding: 8px 20px;
  background-color: white;
  text-align: justify;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 77%;
  padding: 10px 20px;
  background-color: #ffe4c46a;
  box-shadow: 0px 0px 3px black;
  border-radius: 5px;
`;

function Profile({ photoUrl, name, description }) {
  return (
    <Div>
      <h2>{name}</h2>
      <Img src={photoUrl} />
      <P>{description}</P>
    </Div>
  );
}

export default Profile;
