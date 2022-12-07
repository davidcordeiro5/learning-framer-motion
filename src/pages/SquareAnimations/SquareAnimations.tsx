import { AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";
import Button from "~/components/Button";
import Modal from "./components/Modal";
import Snippet from "./components/Snippet";

import { PageContainer, Square } from "./SquareAnimations.styled";

const SquareAnimations = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const constraintsRef = useRef(null);

  const cVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.7,
      },
    }),
    hidden: {
      y: -200,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // x.set(e.pageX);
    // y.set(e.pageY);
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
      <Snippet title="custom variants">
        <AnimatePresence>
          <div style={{ display: "flex" }}>
            {[...Array(3)].map((_, i) => (
              <Square
                key={i}
                custom={i}
                variants={cVariants}
                animate="visible"
                initial="hidden"
              />
            ))}
          </div>
        </AnimatePresence>
      </Snippet>
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

      <Snippet title="initial and exit animation">
        <Button onClick={() => setIsOpen((c) => (c = !c))}>
          {!isOpen ? "Display square" : "Hidden square"}
        </Button>

        <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
          <h2 style={{ textAlign: "center", color: "var(--theme-bg)" }}>
            Hello
          </h2>
        </Modal>
      </Snippet>

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
