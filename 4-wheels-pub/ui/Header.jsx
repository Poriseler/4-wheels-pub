import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 12vh;
  background-color: yellow;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;
const borderAnimation = keyframes`
  /* 0% { border-left: solid 1px; }
  25% { border-left: solid 1px;border-top: solid 1px; }
  50% { border-left: solid 1px;border-top: solid 1px;border-right: solid 1px; }
  100% { border: solid 1px; box-shadow: 0px 0px 4px black } */

`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  transition: color 4s;
  padding: 4px;
  /* transition-duration: 4s; */
  /* transition: bottom 4s ease-in-out; */
  &:hover {
    border-bottom: 1px solid;

    /* animation: ${borderAnimation} 800ms forwards; */
    border-color: black;
    color: red;
    bottom: 10px;
    position: relative;
  }

  /* @media (min-width: 770px) {
    display: ${(props) => (props.show ? "block" : "none")};
  } */
`;

const MobileNav = styled.nav`
  /* top: 0;
  position: relative; */
  font-size: 1rem;
  display: none;
  height: 100%;
  justify-content: flex-end;
  /* margin-top: 2.5rem; */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const DesktopNav = styled.nav`
  font-size: 2rem;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
const Li = styled.li`
  text-decoration: none;
  list-style: none;
  @media (max-width: 768px) {
    padding: 2px 8px;
    font-size: 2rem;
    text-align: center;
    margin: 4px;

    &:not(:first-child) {
      border-top: 1px solid black;
    }
  }
`;
const Ul = styled.ul`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    background-color: #808080;
    /* margin-top: 12vh; */
    top: 44px;
    gap: 0.5rem;
    flex-direction: column;
    padding: 5px;
    position: absolute;
    left: 0;
    transition: 2s ease-in-out;
    width: 100%;
    display: ${(props) => (props.show ? "block" : "none")};
  }
`;

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const links = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "About us",
      link: "about",
    },
    {
      name: "Our offer",
      link: "offer",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  return (
    <StyledHeader>
      <MobileNav>
        <div>
          <Ul show={showLinks}>
            {links.map((linkObj, i) => (
              <Li key={i}>
                <StyledNavLink to={`/${linkObj.link}`} key={i}>
                  {linkObj.name}
                </StyledNavLink>
              </Li>
            ))}
          </Ul>
        </div>
        <Bars3Icon width={"60px"} onClick={() => setShowLinks(!showLinks)} />
      </MobileNav>
      <DesktopNav>
        <Ul>
          {links.map((linkObj, i) => (
            <Li key={i}>
              <StyledNavLink to={`/${linkObj.link}`} key={i}>
                {linkObj.name}
              </StyledNavLink>
            </Li>
          ))}
        </Ul>
      </DesktopNav>
    </StyledHeader>
  );
}

export default Header;
