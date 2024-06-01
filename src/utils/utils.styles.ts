import { css } from "styled-components";

export const getTextEllipsis = (maxLines: number) => css`
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: ${maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
