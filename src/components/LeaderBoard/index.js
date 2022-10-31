import React, { useState } from "react";
import Filter from "./Filter";
import RankTable from "./RankTable";
import { Container, TitleContainer, Title, SubTitle, Player } from "./style";

const RankOptions = [
  { id: 1, option: 100 },
  { id: 2, option: 200 },
  { id: 3, option: 300 },
];
const typeOptions = [
  { id: 1, option: "savers" },
  { id: 2, option: "referalls" },
];

function LeaderBoard() {
  const [rankSize, setRankSize] = useState(RankOptions[0].option);
  const [typeRank, setRankType] = useState(typeOptions[1].option);
  const [number, setNumber] = useState(1); //number of pages

  return (
    <Container>
      <TitleContainer>
        <Title>LeaderBoard</Title>
        <SubTitle>Rank up and get the highest rewards</SubTitle>
      </TitleContainer>
      <Player>
        <img src="/assets/images/SVG/off-player.png" alt="" />
      </Player>

      <Filter
        typeRank={typeRank}
        RankOptions={RankOptions}
        typeOptions={typeOptions}
        setRankType={setRankType}
        rankSize={rankSize}
        setRankSize={setRankSize}
      />

      {/* ranking table */}
      <RankTable
        type={typeRank}
        rankSize={rankSize}
        number={number}
        setNumber={setNumber}
      />
    </Container>
  );
}

export default LeaderBoard;
