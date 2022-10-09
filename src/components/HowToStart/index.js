import React from "react";
import OutlinedBtn from "../Buttons/OutlinedBtn";
import { Container, Steps, Title, Bottom } from "./styles";

function index() {
  return (
    <Container>
      <Title>How To Get Started</Title>
      <Steps>
        <img src="/assets/images/SVG/steps.svg" alt="steps" />
      </Steps>
      <Bottom>
        <OutlinedBtn
          text={"Read more on how to participate"}
          icon={"/assets/images/SVG/righticon.svg"}
        />
      </Bottom>
    </Container>
  );
}

export default index;
