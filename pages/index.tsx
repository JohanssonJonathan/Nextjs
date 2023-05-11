import styled from "@emotion/styled";
import DefaultImage from "next/image";
import Content from "../components/Content";
import { headerImageSrc } from "../util/consts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderImage = styled.div`
  width: 100%;
  position: relative;
  height: 200px;
`;

const Image = styled(DefaultImage)`
  position: absolute;
  object-fit: cover;
  width: 100%;
`;

export default () => (
  <Wrapper>
    <HeaderImage>
      <Image
        src={headerImageSrc}
        alt="Rick and morty"
        width={1000}
        height={300}
      />
    </HeaderImage>
    <Content />
  </Wrapper>
);
