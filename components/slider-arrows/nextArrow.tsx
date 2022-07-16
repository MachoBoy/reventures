const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className='absolute -top-16 right-0 text-2xl text-[#00000087]'
      onClick={onClick}
    >
      &#5171;
    </button>
  );
};

export default NextArrow;
