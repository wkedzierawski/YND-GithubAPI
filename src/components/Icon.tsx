import { useMemo } from "react";
import styled from "styled-components";
import ArrowDownSVG from "../assets/svg/arrowDown.svg";
import StarSVG from "../assets/svg/star.svg";

type Icons = "ArrowDown" | "Star";

type StyledProps = {
  $size?: number;
  $rotated?: boolean;
};

type Props = StyledProps & {
  name: Icons;
};

export const Icon = ({ name, $size = 20, ...styledProps }: Props) => {
  const svg = useMemo(() => {
    switch (name) {
      case "ArrowDown":
        return ArrowDownSVG;
      case "Star":
        return StarSVG;
    }
  }, [name]);

  return <Image src={svg} $size={$size} {...styledProps} />;
};

const Image = styled.img<StyledProps>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  transform: ${(props) => (props.$rotated ? "rotate(180deg)" : "initial")};
`;
