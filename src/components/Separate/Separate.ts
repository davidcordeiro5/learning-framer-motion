import styled from "styled-components";

const Separate = styled.span<{ margin?: "8px" | "16px" | "24px" }>`
  margin: ${({ margin }) => margin} 0;
  width: 100%;
  height: 1px;
  border-bottom: solid 1px var(--color-dark-60);
`;
export default Separate;
