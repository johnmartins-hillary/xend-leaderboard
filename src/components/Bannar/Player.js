import React from "react";
import styled from "styled-components";

export const PlayerContainer = styled.div`
  position: absolute;
  width: ${(props) => props.property.width};
  left: ${(props) => props.property.left};
  top: ${(props) => props.property.top};

  @media only screen and (max-width: 600px) {
    width: ${(props) => props.responsiveProps.width};
    top: ${(props) => props.responsiveProps.top};
    left: ${(props) => props.responsiveProps.left};
  } ;
`;

export const Image = styled.img`
  width: 100%;
`;

function Player({ image, property, responsiveProps }) {
  return (
    <PlayerContainer property={property} responsiveProps={responsiveProps}>
      <Image src={image} />
    </PlayerContainer>
  );
}

export default Player;
