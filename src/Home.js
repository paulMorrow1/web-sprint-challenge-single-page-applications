import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background: green;
`;

export default function Home() {
  return <Wrapper>hello</Wrapper>;
}
