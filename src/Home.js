import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background: green;
  color: white;
  font-size: 2rem;
`;

const Crust = styled.h2`
  color: navy;
  font-size: 1.5rem;
`;

export default function Home() {
  return (
    <Wrapper>
      Welcome! Ready to make some Pizza?!
      <Crust>Try our award winning Thin Crust!</Crust>
    </Wrapper>
  );
}
