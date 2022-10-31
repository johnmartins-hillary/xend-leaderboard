import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background: url("/assets/images/SVG/banner-bg.png");
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: contain;
  mix-blend-mode: overlay;
  height: 872.27px;
  width: 100%;

  button {
    position: absolute;
    top: 10%;

    @media screen and (max-width: 600px) {
      top: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    height: 300px;
    background-size: contain;
    p {
      position: absolute;
      top: -40px;
    }
  }
`;

export const PostImg = styled.img`
  position: absolute;
  width: 50px;
  height: 30;
  left: -138px;
  top: -55px;
`;
