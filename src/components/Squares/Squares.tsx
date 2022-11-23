import { motion } from "framer-motion";

const Squares = () => {
  return (
    <div style={{ width: "100%" }}>
      <motion.div
        className="square"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Squares;
