import React from "react";
import {
  FooterContainer,
  TopContent,
  BottomContent,
  TopLeftContent,
  TopRightContent,
  TopLeftContentTitle,
  TopLeftContentDesc,
  Copyright,
} from "./style";
import { footerIcons } from "../utils/FooterIcons";
import IconWithText from "../Icon/IconWithText";

function Footer() {
  return (
    <FooterContainer>
      <TopContent>
        <TopLeftContent>
          <TopLeftContentTitle>Join Our Community</TopLeftContentTitle>
          <TopLeftContentDesc>
            Follow the trends, ask questions, get help, join the conversation
            and learn about xend finance.
          </TopLeftContentDesc>
        </TopLeftContent>
        <TopRightContent>
          {footerIcons?.map((item, index) => (
            <IconWithText
              key={item + index}
              image={item.icon}
              text={item.text}
            />
          ))}
        </TopRightContent>
      </TopContent>
      <BottomContent src="/assets/images/PNG/footerImg.png"></BottomContent>
      <Copyright>XEND Finance, Copyright © 2021. All Rights Reserved</Copyright>
    </FooterContainer>
  );
}

export default Footer;
