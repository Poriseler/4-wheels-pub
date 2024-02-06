import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 25vh;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1rem;
`;

const Tab = styled.p`
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  margin-bottom: 0;
  padding: 6px 5px 0 5px;
  border-radius: 8px 8px 0 0;
  background-color: ${(props) => (props.active ? "aliceblue" : "none")};
  &::after {
    content: "";
    position: absolute;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transition: width 0.4s ease-in-out;
  }
`;
const P = styled.p`
  text-align: justify;
  font-size: 1.5rem;
  padding: 5px 10px;
  background-color: aliceblue;
  border-radius: ${(props) => (props.edge ? "0" : "10px")} 10px 10px 10px;
  margin: 0;
`;
function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  const descriptions = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adipisci, officiis odio dolor iusto perspiciatis impedit rerum ipsum asperiores fugiat provident porro consequatur laudantium quibusdam qui cum tenetur id a. Tempora illum cum dicta repellendus inventore et, natus quae aut?",
    "Vero vitae porro illum temporasoluta recusandae nihil enim doloribus magni et minus unde expeditaearum, totam neque accusamus, laboriosam nostrum, est molestias rerumsed nam cumque ducimus. Quos cumque ex dolorum, delectus sint quidemrepellendus aliquid rem porro reprehenderit perferendis sed fugiatoptio. Neque omnis ex sed, dolor hic doloremque recusandae repudiandaeharum reiciendis numquam consequuntur, tempore nulla dignissimos unde.",
    "placeat inventore? Amet corporis ut aut vitae deleniti facilis nostrum consectetur! Facere reiciendis voluptate et laboriosam, nobis obcaecati in, eos quisquam harum expedita amet eligendi consectetur rem maxime. Quae labore aperiam repellendus pariatur veniam doloremque, temporibus quia eos eaque ad dolorum inventore magni cumque ex recusandae possimus harum nisi aliquam!",
  ];
  return (
    <Container>
      <Div>
        <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
          Tab 1
        </Tab>
        <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
          Tab 2
        </Tab>
        <Tab active={activeTab === 3} onClick={() => setActiveTab(3)}>
          Tab 3
        </Tab>
      </Div>
      <P edge={activeTab === 1}>{descriptions[activeTab - 1]}</P>
    </Container>
  );
}

export default Tabs;
