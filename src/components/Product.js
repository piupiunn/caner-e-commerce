import Search from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import styled from "styled-components";

export default function Product({ item }) {
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;

  const Container = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    background-color: #f5fbfd;
    position: relative;
    justify-content: center;
    text-align: center;
    &:hover ${Info} {
      opacity: 1;
    }
  `;

  const Circle = styled.div`
    width: 250px;
    height: 300px;

    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  `;

  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;

  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    transition: all 0.5s ease;

    &:hover {
      background-color: #e9f5f5;
      scale: 1.1;
    }
  `;

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
}
