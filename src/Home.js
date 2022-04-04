import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background: green;
  color: white;
  font-size: 2rem;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const GetStarted = styled.h2`
  color: navy;
  font-size: 1.5rem;
`;

export default function Home() {
  return (
    <Wrapper>
      Welcome! Ready to make some Pizza?!
      <GetStarted>Click on the 'Pizza' link to get started!</GetStarted>
    </Wrapper>
  );
}
