import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Head = styled.div`
  background: pink;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 3rem;
`;

const Lambda = styled.h1`
  color: blue;
  font-size: 3rem;
`;

const Linkage = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`;

export default function Header() {
  return (
    <Head>
      <Lambda>Lambda Eats</Lambda>
      <Linkage>
        <Link to="/">Home</Link>
        <Link id="order-pizza" to="/pizza">
          Pizza
        </Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/practice-page">Practice Page</Link>
      </Linkage>
    </Head>
  );
}
