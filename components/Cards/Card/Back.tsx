import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../util/colors";
import Icons from "../../common/Icons";
import { characterStatus, gender, characterSpecie } from "../../../util/types";

const BackCard = styled.div`
  background-color: ${colors.cardInformation};
  border-radius: 7px;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  height: calc(100% - 14px);
  width: calc(100% - 14px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > div:not(:first-of-type) {
    width: 100%;
  }
`;

interface IBackCard {
  gender: gender;
  status: characterStatus;
  specie: characterSpecie;
  origin: string;
}

export default ({ gender, status, specie, origin }: IBackCard) => (
  <BackCard>
    <Content>
      <div>{gender !== "unknown" && <Icons icon={gender} />}</div>

      <div>
        <i>- specie -</i> {specie}
      </div>
      <div>
        <i>- origin -</i> {origin}
      </div>
      <div>
        <i>- status -</i> {status}
      </div>
    </Content>
  </BackCard>
);
