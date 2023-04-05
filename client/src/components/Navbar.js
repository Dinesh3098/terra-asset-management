import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined, AccountCircle } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const User = styled.h6`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Container1 = styled.div`
  height: 20px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;


const Navbar = () => {
  let fullName = localStorage.getItem("fullName")
  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>TERRA.</Logo>
        </Center>
        <AccountCircle />
        <User>{fullName}</User>
      </Wrapper>
      <Container1/>
    </Container>
  
  );
};

export default Navbar;