import Slider from 'react-slick';
import NextArrow from '../slider-arrows/nextArrow';
import PrevArrow from '../slider-arrows/prevArrow';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const PortfolioSlider = ({ children }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerPadding: '30px',
    // centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div className='w-[10px] h-[10px] rounded-full bg-[#7C7C7C92] mx-auto'></div>
    ),
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default PortfolioSlider;
