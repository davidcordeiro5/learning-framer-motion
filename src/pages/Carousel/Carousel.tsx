import styled from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  "https://images.unsplash.com/photo-1535376472810-5d229c65da09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  "https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  "https://images.unsplash.com/photo-1655635131711-f52f3fd15328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
];

const Container = styled.div`
  position: relative;
  margin-top: var(--spacing-48);

  .next,
  .prev {
    position: absolute;
    display: flex;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    align-items: center;
    top: 50%;
  }

  .next {
    right: 20px;
  }
  .prev {
    left: 20px;
  }
`;

const Carousel = () => {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    let newPage: number;
    const length = images.length - 1;

    if (newDirection === 1) {
      newPage = page >= length ? 0 : page + newDirection;
    } else {
      newPage = page <= 0 ? length : page + newDirection;
    }
    setPage([newPage, newDirection]);
  };

  console.log("page :>> ", page);

  return (
    <Container>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          style={{ width: "100%", height: 300, objectFit: "cover" }}
          key={page}
          src={images[page]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
        <div className="next" onClick={() => paginate(1)}>
          ➡️
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          ⬅️
        </div>
      </AnimatePresence>
    </Container>
  );
};

export default Carousel;
