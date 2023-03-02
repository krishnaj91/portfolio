import React from "react";
import styled from "styled-components";
import MyLogo from "../../assets/logo.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;

const Container = styled.div`
  height: 8vh;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.img`
  height: 50px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.li`
  padding-right: 50px;

  :hover {
    color: #da4ea2;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
`;
const Button = styled.button`
  border: none;
  background-color: #da4ea2;
  width: 100px;
  height: 30px;
  cursor: pointer;
  border-radius: 20px;
  color: white;

  :hover {
    color: #da4ea2;
    background-color: transparent;
    border:1px solid #da4ea2;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Logo src={MyLogo} />
          <List>
            <Links>HOME</Links>
            <Links>SKILLS</Links>
            <Links>WORKS</Links>
            <Links>CONTACT</Links>
          </List>
        </Left>
        <Right>
          <Button>HIRE NOW</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Navbar;
