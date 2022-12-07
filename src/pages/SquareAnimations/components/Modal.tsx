import ReactDOM from "react-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";
import { KeyPress, useKeyControllers } from "~/hooks/useKeyControllers";

interface Props {
  isOpen: boolean;
  close: () => void;
  children?: ReactNode;
}

const Modal: FC<Props> = ({ isOpen, close, children }) => {
  useKeyControllers(KeyPress.ESCAPE, close);

  const elem = document.querySelector(".app");

  const variants = {
    visible: {
      opacity: 1,
      // transition: {
      // staggerChildren: 1,
      // when: "beforeChildren",
      // duration: 0.3,
      // delayChildren: 0.3,
      // },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };

  const contentV = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        stiffness: 0,
        damping: 0,
        // duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.3,
      },
    },
  };

  return elem
    ? ReactDOM.createPortal(
        <AnimatePresence>
          {isOpen && (
            <Overlay
              variants={variants}
              animate="visible"
              initial="hidden"
              exit="hidden"
            >
              <Content variants={contentV}>
                <CloseBar onClick={close}>
                  <Dash />
                </CloseBar>
                <div className="content">{children}</div>
              </Content>
            </Overlay>
          )}
        </AnimatePresence>,
        elem
      )
    : null;
};

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: auto;
  width: 100%;
  max-width: 512px;
  height: fit-content;
  border-radius: var(--radius-m);
  > .content {
    padding: var(--spacing-16);
  }
`;

const CloseBar = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  width: calc(100% - 32px);
  height: 32px;
  border-bottom: solid 1px var(--color-dark-60);
`;

const Dash = styled.span`
  margin: auto;
  width: 32px;
  height: 4px;
  border-radius: var(--radius-m);
  background-color: var(--color-dark-60);
`;

const Overlay = styled(motion.div)`
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-16);
  background-color: var(--color-dark-10-40);
  z-index: 10;
`;

export default Modal;
