import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  left: 0;
  bottom: 0;
  position: relative;
  margin-top: 200px;

  @media screen and (max-width: 600px) {
    margin-top: 100px;
  }
`;

export const Copyright = styled.p`
  position: absolute;
  bottom: 20%;
  left: 40%;
  font-style: normal;
  font-weight: 500;
  font-size: 16.0611px;
  line-height: 19px;
  text-align: center;
  color: #acacac;

  @media screen and (max-width: 600px) {
    font-size: 10px;
    left: 15%;
    bottom: 10%;
  }
`;

export const TopContent = styled.div`
  display: flex;
  padding: 50px;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 560px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const BottomContent = styled.img`
  width: 100%;
`;

export const TopLeftContent = styled.div`
  text-align: left;
  flex: 0.4;
`;

export const TopLeftContentTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 70.7645px;
  color: #000000;

  @media screen and (max-width: 600px) {
    font-size: 16.7645px;
  }
`;

export const TopRightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex: 0.6;
  gap: 50px;
  @media screen and (max-width: 600px) {
    gap: 20px;
  }
`;

export const TopLeftContentDesc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 40.3234px;
  color: #4b4b4b;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
