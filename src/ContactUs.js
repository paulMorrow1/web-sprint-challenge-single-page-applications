import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Contact = styled.div`
  color: orange;
  background: aquamarine;
  font-size: 5rem;
  padding: 3rem;
  margin: 1.5rem;
`;

const Phone = styled.div`
  font-size: 3rem;
`;

export default function ContactUs() {
  return (
    <Contact>
      Contact Us HERE!
      <Phone>(555)467-4992</Phone>
    </Contact>
  );
}
