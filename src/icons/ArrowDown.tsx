import styled from "styled-components";
import ArrowDownSVG from "../static/arrowDown.svg";

type StyledProps = {
  size: number;
  onClick: () => void;
  $rotated: boolean;
};

const Image = styled.img<StyledProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  transform: rotate(${(props) => (props.$rotated ? "180deg" : "0deg")});
  cursor: pointer;
`;

export const ArrowDown = (styledProps: StyledProps) => {
  return <Image src={ArrowDownSVG} {...styledProps} />;
};
