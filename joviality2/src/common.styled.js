import styled from "styled-components";
export const Section = styled.section`
  padding: 50px 0;
`;

export const Heading = styled.h2`
  font-family: "Chiffon";
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  font-size: ${({ fontSize }) => fontSize && fontSize};
  line-height: 115%;
  text-align: center;
  color: #ffffff;
  @media only screen and (max-width: 767px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 520px) {
    font-size: 50px;
  }
`;
export const Text = styled.p`
  font-family: "Sansation";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;

  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  color: ${({ color }) => (color ? color : "#ffff")};
  padding: ${({ padding }) => (padding ? padding : "")};
  max-width: ${({ maxWidth }) => maxWidth};
  margin: 0 auto;
`;
