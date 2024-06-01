type Props = {
  condition: boolean;
  children: JSX.Element;
};

export const If = ({ children, condition }: Props) => {
  return condition ? children : null;
};
