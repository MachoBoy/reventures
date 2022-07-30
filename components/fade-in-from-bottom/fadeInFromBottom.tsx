import { motion } from 'framer-motion';

interface Props {
  children: JSX.Element;
}

const FadeInFromBottom = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { y: { stiffness: 100, velocity: -200 } },
        },
        hidden: {
          opacity: 0,
          y: '100%',
          transition: {
            y: { stiffness: 100 },
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromBottom;
