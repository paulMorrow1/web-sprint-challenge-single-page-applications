import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  background: yellow;
  color: red;
  font-size: 4.5rem;
  padding: 3rem;
  display: flex;
  justify-content: left;
`;

export default function Footer(props) {
  const { children } = props;
  return <Foot>This is your {children}!</Foot>;
}
