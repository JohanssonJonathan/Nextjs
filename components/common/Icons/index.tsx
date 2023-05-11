import Male from "./Male";
import Female from "./Female";
import Arrow from "./Arrow";
import styled from "@emotion/styled";
import { IconType } from "../../../util/types";

const Icons = {
  Male,
  Female,
  Arrow,
};

const Box = styled.div`
  width: 100px;
  height: 100px;
`;

export default ({ icon }: { icon: IconType }): JSX.Element | null =>
  Icons[icon] ? <Box>{Icons[icon]()}</Box> : null;
