import { useMemo } from "react";
import styled from "styled-components";
import ArrowDownSVG from "../static/arrowDown.svg";
import StarSVG from "../static/star.svg";

type Icons = "ArrowDown" | "Star";

type StyledProps = {
  $size?: number;
  $rotated?: boolean;
};

type Props = StyledProps & {
  name: Icons;
  onClick?: () => void;
};

export const Icon = ({ name, onClick, $size = 20, ...styledProps }: Props) => {
  const Component = onClick ? ClickableImage : Image;

  const svg = useMemo(() => {
    switch (name) {
      case "ArrowDown":
        return ArrowDownSVG;
      case "Star":
        return StarSVG;
    }
  }, [name]);

  return (
    <Component src={svg} onClick={onClick} $size={$size} {...styledProps} />
  );
};

const Image = styled.img<StyledProps>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  transform: ${(props) => (props.$rotated ? "rotate(180deg)" : "initial")};
`;

const ClickableImage = styled(Image)`
  cursor: pointer;
`;
