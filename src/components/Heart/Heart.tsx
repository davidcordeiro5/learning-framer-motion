import { motion } from "framer-motion";
import "./style.css";

const Heart = () => {
  return (
    <div>
      <motion.div
        className="heart"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 1.5 }}
      >
        <div className="red-circle l" />
        <div className="red-circle r" />
        <div className="red-square" />
      </motion.div>
    </div>
  );
};

export default Heart;
