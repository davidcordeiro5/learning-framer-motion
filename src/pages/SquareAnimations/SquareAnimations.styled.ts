import { motion } from "framer-motion";
import styled from "styled-components";

export const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 100%; */
  margin: var(--spacing-16);
  > div {
    margin-bottom: var(--spacing-72);
  }
`;

export const Square = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: var(--spacing-16);
  background: linear-gradient(140deg, #55d8fe, #f7aef8);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
