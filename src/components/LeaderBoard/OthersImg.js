import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  width: 81px;
  height: 81px;
  border: 2px solid transparent;
  border-radius: 50%;
  border: 3px solid #e96313;
  @media screen and (max-width: 600px) {
    width: 45px;
    height: 45px;
  }
`;
const OthersImg = () => {
  return <Container></Container>;
};

export default OthersImg;
