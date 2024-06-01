import styled from "styled-components";
import { branding } from "../utils/branding";
import { forwardRef } from "react";

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

export const Search = forwardRef<HTMLInputElement, Props>(
  ({ onValueChange, ...props }, ref) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange(e.currentTarget.value);
    };

    return <Input {...props} ref={ref} onChange={onChange} />;
  }
);
