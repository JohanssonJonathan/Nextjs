import React, { useState } from "react";
import styled from "@emotion/styled";
import FrontCard from "./Front";
import BackCard from "./Back";
import Icons from "../../common/Icons";
import { gender, characterSpecie, characterStatus } from "../../../util/types";
import { colors } from "../../../util/colors";

const Card = styled.div`
  background-color: transparent;
  width: 217px;
  height: 253px;
  perspective: 1000px;
  position: relative;
  cursor: pointer;

  & > .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0px;
    right: -2px;
    z-index: 4;
    box-shadow: unset;
    transform: scaleY(-1) rotate(50deg);

    @media screen and (min-width: 900px) {
      display: none;
    }

    > div {
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }
  }

  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    box-shadow: 0px 0px 10px rgba(0, 0, 0.3);

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (min-width: 900px) {
    :hover > div > .hover {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 2;
      color: ${colors.white};

      & > div {
        position: relative;

        & svg {
          top: 0;
          position: absolute;
        }
      }
    }
  }
`;

const InnerDiv = styled.div<{ rotated: boolean }>`
  transform: rotateY(${({ rotated }) => (rotated ? "180" : 0)}deg);
`;

interface ICard {
  src: string;
  name: string;
  gender: gender;
  status: characterStatus;
  origin: string;
  specie: characterSpecie;
}

export default ({ src, name, gender, status, specie, origin }: ICard) => {
  const [rotated, setRotated] = useState(false);

  return (
    <Card
      onMouseLeave={() => setRotated(false)}
      onClick={() => setRotated((state) => !state)}
    >
      <div className="arrow">
        <Icons icon="Arrow" />
      </div>
      <InnerDiv rotated={rotated}>
        {!rotated && (
          <div className="hover">
            <h4>Click to view more</h4>
          </div>
        )}

        <FrontCard src={src} name={name} />
        <BackCard
          origin={origin}
          gender={gender}
          status={status}
          specie={specie}
        />
      </InnerDiv>
    </Card>
  );
};
