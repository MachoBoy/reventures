import Head from 'next/head';
import MainSectionTitle from '../components/main-section-title/mainSectionTitle';
import TeamCard from '../components/team-card/team-card';
import { teamData } from '../data/team-data';
const Team = () => {
  return (
    <div className='w-full max-w-[1920px] mx-auto'>
      <Head>
        <title>RE:VENTURES - Team</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='w-full h-[390px] bg-team-top flex flex-col justify-center items-center'>
        <div className='text-white text-7xl font-semibold'>Team</div>
        <div className='mt-4 text-white text-4xl'>
          다양한 투자 분야별 전문가들이 스타트업의 성장을 지원합니다.
        </div>
      </div>
      <div className='w-full max-w-[1168px] mx-auto pt-20 pb-12'>
        <MainSectionTitle title='REVENTURES PEOPLE' isDark={false} />
        <div className='mt-12 w-full grid grid-cols-4'>
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
