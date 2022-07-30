import Head from 'next/head';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
import TeamCard from '../components/team-card/team-card';
import { teamData } from '../data/team-data';
const Team = () => {
  return (
    <div className='w-full max-w-[1920px] mx-auto'>
      <Head>
        <title>RE:VENTURES - Team</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width maximum-scale=1.0, shrink-to-fit=no, user-scalable=0'
        />
      </Head>
      <div className='w-full h-[390px] bg-team-top bg-center bg-no-repeat flex flex-col justify-center items-center px-6 sm:h-[330px] sm:items-start sm:pt-24'>
        <div className='w-full text-white text-7xl font-semibold lg:text-6xl text-center sm:text-[46px]'>
          Team
        </div>
        <div className='mt-4 text-white text-4xl lg:text-3xl text-center sm:text-[26px] sm:mt-[26px]'>
          다양한 투자 분야별 전문가들이 스타트업의 성장을 지원합니다.
        </div>
      </div>
      <div className='w-full max-w-[1168px] mx-auto pt-20 pb-12 px-6 sm:pt-12'>
        <MainSectionTitle title='REVENTURES PEOPLE' isDark={false} />
        <div className='mt-12 w-full grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1'>
          {teamData.map(({ name, position, company, active, exit }, index) => {
            return (
              <TeamCard
                key={index}
                name={name}
                position={position}
                company={company}
                active={active}
                exit={exit}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
