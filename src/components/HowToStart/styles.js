import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 300px;
  gap: 50px;
  align-items: stretch;
  @media screen and (max-width: 600px) {
    gap: 20px;
    margin-top: 100px;
  }
`;

export const Steps = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  padding: 20px;
  @media screen and (max-width: 600px) {
    img {
      width: 100%;
    }
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
