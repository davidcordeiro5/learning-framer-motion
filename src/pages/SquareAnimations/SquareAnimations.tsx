import { AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import Snippet from "./components/Snippet";
import SnippetVariants from "./components/SnippetVariants";
import SnippetWithModal from "./components/SnippetWithModal";

import { PageContainer, Square } from "./SquareAnimations.styled";

const SquareAnimations = () => {
  const constraintsRef = useRef(null);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <PageContainer
      key="square-animations-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        stiffness: 0,
        damping: 0,
        duration: 0.1,
      }}
    >
      <SnippetVariants />
      <Snippet title="Hover the square to see rotate n scale">
        <Square
          whileTap={{
            rotate: 360,
            scale: 2,
          }}
          whileHover={{
            rotate: 360,
            scale: 2,
          }}
          transition={{ duration: 0.7 }}
        />
      </Snippet>

      <Snippet title="PingPong">
        <AnimatePresence>
          <Square
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 100, opacity: 1 }}
            transition={{
              duration: 1,
              stiffness: 0,
              damping: 0,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </AnimatePresence>
      </Snippet>
      <SnippetWithModal />

      <Snippet title="drag me">
        <DargConstraints ref={constraintsRef}>
          <Square
            whileDrag={{ scale: 1.2 }}
            drag
            dragConstraints={constraintsRef}
          />
        </DargConstraints>
      </Snippet>

      <Snippet title="Mouse tracker">
        <DargConstraints
          style={{
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            perspective: 400,
          }}
          onMouseMove={handleMouse}
          onMouseLeave={() => {
            x.set(200);
            y.set(200);
          }}
        >
          <Square
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
          />
        </DargConstraints>
      </Snippet>
    </PageContainer>
  );
};

const DargConstraints = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff;
  border-radius: var(--spacing-16);
  -webkit-box-shadow: 0px 0px 18px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 18px 7px rgba(0, 0, 0, 0.3);
`;

export default SquareAnimations;
