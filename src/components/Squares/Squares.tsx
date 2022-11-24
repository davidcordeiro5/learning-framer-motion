import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Squares = () => {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <div style={{ width: "100%" }}>
      <button onClick={() => setHidden((c) => (c = !c))}>hidden me</button>
      <AnimatePresence>
        {!hidden && (
          <motion.div
            className="square"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Squares;
