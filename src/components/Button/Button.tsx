import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  onClick?: () => void;
  children?: ReactNode;
}

const Button: FC<Props> = ({ onClick, children }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  height: fit-content;
  padding: var(--spacing-8) var(--spacing-16);
  font-weight: 700;
  border-radius: 16px;
  background-color: var(--color-primary);
  color: var(--color-dark-20);
  border: solid 1px var(--color-dark-60);
`;

export default Button;
