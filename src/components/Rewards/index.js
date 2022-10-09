import React from "react";
import GradientBtn from "../Buttons/GradientBtn";
import RoundedBtn from "../Buttons/RoundedBtn";
import {
  Container,
  TitleContainer,
  Title,
  SubTitle,
  Bottom,
  Rewards,
  Reward,
} from "./styles";

function index() {
  return (
    <Container>
      <TitleContainer>
        <Title>Rewards</Title>
        <SubTitle>Participate and get Cash rewards</SubTitle>
      </TitleContainer>
      <Rewards>
        <Reward>
          <RoundedBtn text={"1st"} />
          <GradientBtn text={"200K"} />
        </Reward>
        <Reward>
          <RoundedBtn text={"2nd"} />
          <GradientBtn text={"100K"} />
        </Reward>
        <Reward>
          <RoundedBtn text={"3rd"} />
          <GradientBtn text={"50K"} />
        </Reward>
      </Rewards>
      <Bottom>
        <img src="/assets/images/SVG/readme.svg" alt="" />
        <span>
          Please, read the rules, <a href="/">terms and conditions</a>
        </span>
      </Bottom>
    </Container>
  );
}

export default index;
