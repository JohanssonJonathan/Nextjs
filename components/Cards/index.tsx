import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import { ICharacters } from "../../util/interfaces";

const Wrapper = styled.div`
  display: grid;

  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(1, 217px);

  @media screen and (min-width: 490px) {
    grid-template-columns: repeat(2, 217px);
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 217px);
  }
`;

export default ({ characters }: { characters: ICharacters[] }) => (
  <Wrapper>
    {characters.map(({ image, name, gender, status, species, origin, id }) => (
      <Card
        key={id + name}
        src={image}
        name={name}
        gender={gender}
        status={status}
        specie={species}
        origin={origin.name}
      />
    ))}
  </Wrapper>
);
