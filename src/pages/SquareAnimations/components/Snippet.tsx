import { FC, ReactNode } from "react";
import styled from "styled-components";
import Separate from "~/components/Separate";

interface Props {
  title?: string;
  children?: ReactNode;
}

const Snippet: FC<Props> = ({ title, children }) => {
  return (
    <Container>
      {title && (
        <>
          <h4>{title}</h4>
          <Separate margin="16px" />
        </>
      )}
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: var(--spacing-16);
  border-radius: var(--radius-m);
  border: solid 1px var(--color-dark-60);
  background-color: var(--theme-color);
  color: var(--theme-bg);

  > h4 {
    text-align: center;
  }
`;

export default Snippet;
