import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 300px;
  gap: 100px;
  position: relative;

  @media screen and (max-width: 600px) {
    margin-top: 100px;
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

export const Player = styled.div`
  position: absolute;
  width: 414.49px;
  height: 600.98px;
  left: 980.11px;
  top: -200.38px;

  img {
    width: 80%;
    height: 80%;
  }

  @media screen and (max-width: 600px) {
    left: 75%;
    width: 110px;
    height: 150px;
    top: 0;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 50px;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    gap: 10px;
    padding: 0 10px;
    align-items: flex-start;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 307px;
  height: 61px;
  border: 2px solid #d1d1d1;
  border-radius: 55px;
  @media screen and (max-width: 600px) {
    width: 150px;
    height: 25px;
    padding: 5px;
  }
`;

export const SearchBarIcon = styled.img`
  margin-right: 10px;
  @media screen and (max-width: 600px) {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  //   line-height: 22px;
  color: #9d9d9d;
  //   height: 100%;
  width: 100%;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Ranking = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const RankingDesc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #484848;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const RankSelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #c55c18;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;
export const RankOptionsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 100px;
  min-height: 10px;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  top: 100%;
  background: #ffffff;
  z-index: 1;
`;
export const RankOption = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #c55c18;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

// table styles
export const Table = styled.table`
  width: 90%;
  border: none;
  margin: 10px;
  border-collapse: separate;
  border-spacing: 0 30px;

  @media screen and (max-width: 600px) {
    border-spacing: 0 10px;
  }
`;
export const TableHead = styled.thead`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #565656;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;
export const TH = styled.th`
  padding-bottom: ;
`;
export const TableBody = styled.tbody`
  margin-top: 50px;
  color: #fff;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
export const TableRow = styled.tr`
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.12);
  height: 124px;
  width: 90%;
  left: 0px;
  top: 0px;
  border-radius: 12px;
  color: #000;

  @media screen and (max-width: 600px) {
    height: 50px;
  }

  &:nth-child(1) {
    background: ${(props) =>
      props?.currentPage === 1 &&
      "linear-gradient(91.08deg, #2042b8 -34.32%, #ff6600 108.07%)"};
    color: ${(props) => props.currentPage === 1 && "#fff"};
  }
  &:nth-child(2) {
    background: ${(props) =>
      props?.currentPage === 1 &&
      "linear-gradient(90deg, #6780d7 14.21%, #ffb17e 163.41%)"};
    color: ${(props) => props.currentPage === 1 && "#fff"};
  }
  &:nth-child(3) {
    background: ${(props) =>
      props?.currentPage === 1 &&
      "linear-gradient(90deg, #6780d7 14.21%, #ffb17e 163.41%)"};
    color: ${(props) => props.currentPage === 1 && "#fff"};
  }
`;
export const TableData = styled.td`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  position: relative;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    img:nth-child(1) {
      position: absolute;
      bottom: 0;
    }

    @media screen and (max-width: 600px) {
      img:nth-child(2) {
        width: 40px;
        bottom: 0;
      }
      img:last-child {
        width: 30px;
      }
    }
  }
  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  &:nth-child(2) {
    text-align: center;

    @media screen and (max-width: 600px) {
      img {
        width: 10px;
        margin-left: 5px;
      }
    }
  }
  &:nth-child(3) {
    text-align: center;
  }
  &:nth-child(4) {
    text-align: center;
  }
  span.index {
    position: absolute;
    color: #000;
    top: 60%;
    left: 5%;

    @media screen and (max-width: 600px) {
      top: 30%;
    }
  }
`;

// pagination styles
export const Pagination = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  gap: 10px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const PageNumber = styled.span`
  color: ${(props) => (props.selectedPage ? "#c55c18" : "#000")};
  cursor: pointer;
`;
