import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  gap: 100px;

  @media screen and (max-width: 600px) {
    gap: 30px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  color: #000000;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
export const SubTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #484848;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;
export const Rewards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  @media screen and (max-width: 600px) {
    gap: 10px;
  }
`;
export const Reward = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 600px) {
    font-size: 10px;

    img{
        width: 10px;
        
    }
  }
`;
