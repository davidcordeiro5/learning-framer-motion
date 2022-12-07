import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      key="home-page"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        stiffness: 0,
        damping: 0,
        duration: 0.1,
      }}
    >
      <h2>Juste testing</h2>
      <h1>FRAMER MOTION</h1>
      <p>Don't pai attention for the UI of the app please 🤓</p>
    </motion.div>
  );
};

export default Home;
