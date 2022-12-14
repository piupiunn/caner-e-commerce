import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

export default function Products() {
  const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  `;
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}
