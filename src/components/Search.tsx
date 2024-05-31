import styled from "styled-components";
import { branding } from "../utils/branding";

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: ${branding.secondaryColor};
  outline: none;
  border: none;
`;

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onValueChange: (value: string) => void;
};

export const Search = ({ onValueChange, ...props }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.currentTarget.value);
  };

  return <Input {...props} onChange={onChange} />;
};
