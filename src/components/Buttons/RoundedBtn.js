import React from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 105px;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 33.8415px;
  line-height: 41px;
  color: #ffe6c1;
  border: 9px solid #c0c9e8;
  background: linear-gradient(159.18deg, #2042b8 -14%, #ff6600 139.84%);
  border-radius: 50px;

  @media screen and (max-width: 600px) {
    font-size: 8px;
    width: 40px;
    height: 40px;
    border-width: 2px;
  }
`;

function RoundedBtn({ text }) {
  return <Button>{text}</Button>;
}

export default RoundedBtn;
