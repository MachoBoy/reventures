import { motion } from 'framer-motion';

interface Props {
  children: JSX.Element;
}

const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: {
          opacity: 1,
        },
        hidden: {
          opacity: 0,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
