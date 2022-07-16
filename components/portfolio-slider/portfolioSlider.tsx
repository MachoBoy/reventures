import Slider from 'react-slick';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className='absolute -top-16 right-0 text-2xl text-[#00000087]'
      onClick={onClick}
    >
      &#5171;
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className='absolute -top-16 right-7 text-2xl text-[#00000087]'
      onClick={onClick}
    >
      &#5176;
    </button>
  );
};

const PortfolioSlider = ({ children }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerPadding: '30px',
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    customPaging: (i: any) => (
      <div className='w-[10px] h-[10px] rounded-full bg-[#7C7C7C92] mx-auto'></div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default PortfolioSlider;
