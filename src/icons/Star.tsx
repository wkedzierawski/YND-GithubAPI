import styled from "styled-components";
import StarSVG from "../static/star.svg";

type StyledProps = {
  size: number;
};

const Image = styled.img<StyledProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export const Star = (props: StyledProps) => {
  return <Image src={StarSVG} {...props} />;
};
