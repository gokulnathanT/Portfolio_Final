import { useNavigate } from "react-router-dom";
import img1 from "../../assets/gokul_pic.jpeg";
import { motion } from "framer-motion";

import "./Home.css";
const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/About");
  }

  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [3, -3],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="homeContent">
      <div className="homeText">
        <motion.div
          className="homeText-r"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          
          <img className="imgHome" src={img1} alt="Logo Image" />
        </motion.div>
        <div className="homeText-l">
          <h1>GOKULNATHAN THANAPAL ⚡</h1>
          <h3>FULLSTACK DEVELOPER | FUSING DESIGN AND FUNCTIONALITY</h3>
          <div className="homeText-sub">
            <h4 onClick={handleClick}>Know more about me !</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
