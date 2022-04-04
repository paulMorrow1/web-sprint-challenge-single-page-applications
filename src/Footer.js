import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  background: yellow;
  color: red;
  font-size: 1.5rem;
`;

export default function Footer(props) {
  const { children } = props;
  return <Foot>This is your {children}!</Foot>;
}
