import styled from "styled-components";
import { branding } from "../utils/branding";

type Props = React.HTMLProps<HTMLButtonElement> & {
  text: string;
  type: "button" | "submit" | "reset";
};

export const Button = ({ text, ...props }: Props) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

export const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: ${branding.secondaryColor};
  background-color: ${branding.primaryColor};
  padding: 15px 10px;
`;
