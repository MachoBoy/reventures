import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface Props {
  children: JSX.Element;
}

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const PageTransition = ({ children }: Props) => {
  const { asPath } = useRouter();
  return (
    <div className='overflow-hidden'>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={variants}
          animate='in'
          initial='out'
          exit='out'
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
