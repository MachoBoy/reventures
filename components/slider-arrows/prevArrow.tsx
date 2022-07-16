const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className='absolute -top-16 right-7 text-2xl text-[#00000087]'
      onClick={onClick}
    >
      &#5176;
    </button>
  );
};

export default PrevArrow;
