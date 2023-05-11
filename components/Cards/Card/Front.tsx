import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../util/colors";
import DefaultImage from "next/image";

const FrontCard = styled.div`
  background-color: ${colors.cardBackground};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 7px;
`;

const CharacterName = styled.div`
  height: 35px;
  line-height: 35px;
  background-color: ${colors.cardInformation};
  width: calc(100% - 13px);
  border-radius: 0 0 7px 7px;
  text-align: center;
  position: relative;
`;

const Image = styled(DefaultImage)`
  border-radius: 7px 7px 0 0;
`;

interface IFrontCard {
  src: string;
  name: string;
}

export default ({ src, name }: IFrontCard) => (
  <FrontCard>
    <Image width="204" height="204" src={src} alt={name} />
    <CharacterName>{name}</CharacterName>
  </FrontCard>
);
