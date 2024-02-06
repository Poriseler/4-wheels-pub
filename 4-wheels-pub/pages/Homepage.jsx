import styled from "styled-components";

import FadeInSection from "../ui/FadeInSection";
import Tabs from "../ui/Tabs";

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  &::before {
    content: "";
    background-image: url("https://www.momlifetv.com/wp-content/uploads/2021/07/family-dinner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
    z-index: -1;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Div = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 3px solid orange;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const Section = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid orange;
  justify-content: space-between;
  gap: 1rem;
`;

const TabSection = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid orange;
  justify-content: center;
  gap: 1rem;
`;
const Logo = styled.img`
  width: 300px;
  margin-top: 2rem;

  height: 400px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;
const Img = styled.img`
  max-height: 300px;
  max-width: 200px;
`;
const P = styled.p`
  max-width: 60%;
  font-size: 1rem;
  text-align: justify;
`;
function Homepage() {
  return (
    <Main>
      <Div>
        <Logo alt="Logo"></Logo>
        <h3>Finally! We were waiting for You!</h3>
      </Div>
      <Section>
        <FadeInSection>
          <Container>
            <P>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              eligendi, ratione, accusantium iusto quasi, soluta possimus non
              doloribus totam ullam architecto! Provident, aliquam cum quos
              pariatur corrupti obcaecati iusto quibusdam.
            </P>
            <Img alt="random pic with people"></Img>
          </Container>
        </FadeInSection>
      </Section>
      <Section>
        <FadeInSection>
          <Container>
            <P>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              eligendi, ratione, accusantium iusto quasi, soluta possimus non
              doloribus totam ullam architecto! Provident, aliquam cum quos
              pariatur corrupti obcaecati iusto quibusdam.
            </P>
            <Img alt="random pic with people"></Img>
          </Container>
        </FadeInSection>
      </Section>
      <TabSection>
        <Tabs />
      </TabSection>
    </Main>
  );
}

export default Homepage;
