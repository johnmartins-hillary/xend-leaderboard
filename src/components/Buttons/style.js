import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 303px;
  height: 70px;
  //   left: 540px;
  //   top: 234px;
  border: none;
  outline: none;
  background: linear-gradient(99.45deg, #2042b8 -41.89%, #ff6600 156.01%);
  box-shadow: 0px 10px 53px rgba(197, 92, 24, 0.61);
  border-radius: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 38.5636px;
  color: #ffdfb0;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 8px;
    width: 100px;
    height: 30px;
    border-radius: 3px;
    box-shadow: 0px 10px 23px rgba(197, 92, 24, 0.61);
  }
`;
