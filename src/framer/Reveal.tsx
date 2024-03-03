import { Variants, motion } from "framer-motion";

type RevealProps = {
  children: JSX.Element;
};

const fadeAnimate: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Reveal = ({ children }: RevealProps) => {
  return (
    <>
      <motion.div
        variants={fadeAnimate}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Reveal;
