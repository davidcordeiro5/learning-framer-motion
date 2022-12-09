import { AnimatePresence } from "framer-motion";
import { Square } from "../SquareAnimations.styled";
import Snippet from "./Snippet";

const SnippetVariants = () => {
  const variants = {
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
  return (
    <Snippet title="custom variants">
      <AnimatePresence>
        <div style={{ display: "flex" }}>
          {[...Array(3)].map((_, i) => (
            <Square
              key={i}
              custom={i}
              variants={variants}
              animate="visible"
              initial="hidden"
            />
          ))}
        </div>
      </AnimatePresence>
    </Snippet>
  );
};

export default SnippetVariants;
