import React from "react";
import styled from "styled-components";

const Wholepage = styled.div`
  background: skyblue;
  padding: 3rem;
`;

const Bluegill = styled.h1`
  color: royalblue;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Coding = styled.h2`
  color: maroon;
`;
const Learning = styled.h3`
  color: rgba(50, 60, 80);
`;

const PollQuest = styled.label`
  color: red;
  padding: 1rem;
`;

export default function PracticePage() {
  return (
    <Wholepage>
      <Bluegill>This is my practice page!</Bluegill>
      <div>
        <div>
          <Coding>
            I like practicing my coding. The more I practice the more confident
            I feel!
          </Coding>
        </div>
        <div>
          <Learning>
            I still have a long ways to go, but I am excited to continue
            learning!
          </Learning>
        </div>
        <div>
          <PollQuest>
            Take a poll!
            <input
              type="text"
              name="FavoritePizza"
              placeholder="Your favorite Pizza is..."
            />
          </PollQuest>
        </div>
      </div>
    </Wholepage>
  );
}
