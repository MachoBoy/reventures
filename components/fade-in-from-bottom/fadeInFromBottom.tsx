import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface Props {
  children: JSX.Element;
}

const variants = {
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
};

const FadeInFromBottom = ({ children }: Props) => {
  const { asPath } = useRouter();

  return (
    <motion.div
      key={asPath}
      initial='hidden'
      whileInView='visible'
      exit='hidden'
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromBottom;
