import styled from "styled-components";
import { branding } from "../utils/branding";

export const Container = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: ${branding.secondaryColor};
  background-color: ${branding.primaryColor};
  padding: 15px 10px;
`;

type Props = React.HTMLProps<HTMLButtonElement> & {
  text: string;
  type: "button" | "submit" | "reset";
};

export const Button = ({ text, ...props }: Props) => {
  return <Container {...props}>{text}</Container>;
};
