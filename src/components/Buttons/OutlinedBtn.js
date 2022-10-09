import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 237px;
  height: 51.02px;
  border: 1.1px solid
    linear-gradient(104.75deg, #2042b8 29.73%, #ff6600 119.86%);
  //   border-image-source: ;
  padding: 10px;
  border-radius: 31.8194px;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 150px;
    height: 20.02px;
    padding: 20px;
  }
`;

const Text = styled.span`
  margin-right: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 13.1667px;
  line-height: 16px;
  text-align: center;
  color: #404040;

  @media screen and (max-width: 600px) {
    font-size: 8px;
    
  }
`;
const Icon = styled.img`
  @media screen and (max-width: 600px) {
    width: 10px;
  }
`;

function OutlinedBtn({ text, icon }) {
  return (
    <Button>
      <Text>{text}</Text>
      <Icon src={icon}></Icon>
    </Button>
  );
}

export default OutlinedBtn;
