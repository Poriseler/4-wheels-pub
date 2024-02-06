import styled from "styled-components";
import Heading from "../ui/Heading";
import MenuItem from "../ui/MenuItem";
import FadeInSection from "../ui/FadeInSection";
const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const drinks = [
  {
    name: "Silverstons shot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 8.99,
  },
  {
    name: "Barcelona tequila",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 10.99,
  },
  {
    name: "Miamis sunrise",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 10.99,
  },
  {
    name: "SPAs rain",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 10.99,
  },
  {
    name: "Pina COTAlada",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 10.99,
  },
  {
    name: "Abu Dhabi legal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 10.99,
  },
  {
    name: "Monza Limoncello",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 1.09,
  },
];

const dishes = [
  {
    name: "Checo's tacos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 10.99,
  },
  {
    name: "Sainz Paela",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 10.99,
  },
  {
    name: "Max's waffles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 10.99,
  },
  {
    name: "Yuki rolls",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 10.99,
  },
  {
    name: "RawsPierres",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at totam vitae, tempora blanditiis laudantium maiores obcaecati autem sequi ratione.",
    price: 10.99,
  },
];

function Menu() {
  return (
    <Div>
      <Heading as="h1">Menu</Heading>
      <FadeInSection>
        <Heading as="h2">Drinks</Heading>
      </FadeInSection>
      {drinks.map((drinkObj, i) => (
        <FadeInSection key={i}>
          <MenuItem
            name={drinkObj.name}
            description={drinkObj.description}
            price={drinkObj.price}
            key={i}
          />
        </FadeInSection>
      ))}
      <FadeInSection>
        <Heading as="h2">Food</Heading>
      </FadeInSection>
      {dishes.map((dishObj, i) => (
        <FadeInSection key={i}>
          <MenuItem
            key={i}
            name={dishObj.name}
            description={dishObj.description}
            price={dishObj.price}
          />
        </FadeInSection>
      ))}
    </Div>
  );
}

export default Menu;
