import { useEffect, useRef, useState } from 'react';
import {
  motion,
  animate,
  useAnimationControls,
  useInView,
} from 'framer-motion';

interface Props {
  number: number;
  title: string;
  subtitle?: string[];
}

const MainInvestCount = ({ number, title, subtitle }: Props) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef);
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && count <= 0) {
      const node = numberRef.current;
      const controls = animate(0, number, {
        duration: 1.5,
        onUpdate: (value) => {
          if (node) {
            node.textContent = value.toFixed(0);
            // node.textContent = commaSeparateNumber(value.toFixed(0));
          }
        },
        onComplete: () => {
          setCount(1);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, number, count, setCount]);

  // const commaSeparateNumber = (val: any) => {
  //   while (/(\d+)(\d{3})/.test(val.toString())) {
  //     val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  //   }
  //   return val;
  // };

  return (
    <div
      ref={nodeRef}
      className='flex items-center flex-col lg:mt-6 sm:mt-8 lg:first:col-span-3 sm:first:col-span-1'
    >
      <div
        ref={numberRef}
        className='number text-gray-eee text-[58px] lg:text-5xl sm:text[40px]'
      >
        {number}
      </div>
      <div className='title text-[33px] text-[#868686] sm:text-[26px]'>
        {title}
      </div>
      <div className='text-center'>
        {subtitle !== null
          ? subtitle?.map((text, index) => {
              return (
                <div className='text-gray-eee text-lg sm:text-base' key={index}>
                  {text}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default MainInvestCount;
