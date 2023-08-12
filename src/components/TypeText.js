import { motion } from "framer-motion";

const TypedText = (props) => {
  const word = props.text;

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        className={`${props.className}`}
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { delay: props.d, staggerChildren: 0.2, delayChildren: 0.5 },
          },
        }}
      >
        {word.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default TypedText;
