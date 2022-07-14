import MainAboutItem from '../../components/main-about-item/mainAboutItem';

const Home = () => {
  return (
    <div className='w-full'>
      <div className='top-section h-[867px]'></div>
      <div className='second-section'>
        <div className='about-left'>
          <MainAboutItem />
        </div>
      </div>
      <div className='third-section'></div>
    </div>
  );
};

export default Home;
