import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50px;

  @media screen and (max-width: 600px) {
    img {
      max-width: 20px;
    }
  }
`;

export const IconText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 17.3627px;
  line-height: 45px;
  color: #000000;

  @media screen and (max-width: 600px) {
    font-size: 10px
  }
`;
