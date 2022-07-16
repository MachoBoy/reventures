import Slider from 'react-slick';
import NextArrow from '../slider-arrows/nextArrow';
import PrevArrow from '../slider-arrows/prevArrow';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const BrandSlider = ({ children }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    centerPadding: '0',
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default BrandSlider;
