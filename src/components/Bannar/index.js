import React from "react";
import GradientBtn from "../Buttons/GradientBtn";
import { TopContainer } from "./style";
import { players } from "../utils/players";
import Player from "./Player";

function index() {
  return (
    <TopContainer>
      <p className="text-gradient">Serie X</p>
      <GradientBtn text={"LeaderBoard"} />
      {/* <PostImg src="/assets/images/SVG/post2.svg"/> */}
      {players.map((player) => (
        <Player
          key={player.id}
          property={player.property}
          image={player.img}
          responsiveProps={player.responsiveProps}
        />
      ))}
    </TopContainer>
  );
}

export default index;
