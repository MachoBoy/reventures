import Slider from 'react-slick';
import NextArrow from '../slider-arrows/nextArrow';
import PrevArrow from '../slider-arrows/prevArrow';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const BrandSlider = ({ children }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div className='w-[10px] h-[10px] rounded-full bg-[#7C7C7C92] mx-auto'></div>
    ),
    responsive: [
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 814,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default BrandSlider;
