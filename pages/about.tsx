import MainSectionTitle from '../components/main-section-title/mainSectionTitle';

const About = () => {
  return (
    <div className='w-full'>
      <div className='about-top h-[479px]'>
        <div className='flex flex-col'>
          <div className='text-7xl'>About</div>
          <div className='text-4xl text-[##FEFEFE]'>도전하는 모든 투자자와</div>
          <div className='text-4xl text-[##FEFEFE]'>창업가의 파트너</div>
        </div>
      </div>
      <div className='w-full max-w-[1142px] mx-auto'>
        <MainSectionTitle title='what we do' isDark={false} />
        <h3 className='mt-9 text-[32px] font-semibold text-[#3D3D3D]'>
          초기 스타트업을 발굴하고 투자합니다.
        </h3>
        <p className='mt-9 text-2xl font-light text-[#3D3D3D]'>
          좋은 혁신가와 초기 스타트업을 발굴하고 그들의 가치를 알아보는 것은
          생각보다 어려운 일입니다.
          <br /> 창업 초기엔 참고할 수 있는 가시적인 성과 지표가 많지 않기
          때문입니다.
          <br /> 따라서 초기 투자는 스타트업의 잠재력과 진가를 얼마나 잘
          예측하는지가 중요하므로 투자자의 전문성과 충분한 경험을 필요로 합니다.
          <br />
          <br />
          리벤처스는 기술창업 경험자들을 비롯해 산업계, 연구계 출신 구성원들의
          노하우와 네트워크 그리고 자체 구축한 발굴 시스템으로 잠재력 있는
          혁신가들을 만나고 있습니다.
          <br /> 예비창업부터 Seed, Pre-Series A, Series A 단계에 이르기까지
          폭넓은 초기 투자를 지향하면서 스타트업과 시작을 함께 하고 있습니다.
        </p>
      </div>
      <div className='mt-16 w-full max-w-[1142px] mx-auto'>
        <MainSectionTitle title='value add' isDark={false} />
        <h3 className='mt-9 text-[32px] font-semibold text-[#3D3D3D]'>
          초기 스타트업의 성장을 돕습니다.
        </h3>
        <p className='mt-9 text-2xl font-light text-[#3D3D3D]'>
          창업 초기는 가장 도움이 필요한 시기이지만, 아이러니하게 가장 도움받기
          어려운 때이기도 합니다.
          <br /> 하지만 이 시기에 사업을 크게 키울 수 있는 역량이 형성되기
          때문에 성장이란 여정의 방향키를 함께 잡아줄 좋은 파트너를 만나
          시작하는 것이 중요합니다.
          <br /> 리벤처스는 투자금에 더하여 스타트업이 보다 대담한 시도를 할 수
          있도록 다양한 분야에서 지원하고 있습니다.
          <br />
          <br /> 스타트업은 연속된 선택과 결정의 산물이라 해도 과언이 아닙니다.
          <br />
          결정과 행동의 주체는 창업가들이지만 리벤처스는 그 과정을 함께 고민하고
          최선의 선택지를 같이 찾아가며 불확실성을 줄여갑니다.
          <br /> 리벤처스 패밀리사의 성장을 위해 네트워크 연결, 후속투자유치
          지원, 홍보 및 채용 지원에 이르기까지 다양한 방식으로 스타트업을 도우며
          그들의 다음 단계로의 도약을 이끌어냅니다.
        </p>
      </div>
      <div className='philosophy mt-12 bg-slate-500 pt-16 pb-20'>
        <div className='w-full max-w-[1142px] mx-auto'>
          <MainSectionTitle title='philosophy' isDark={true} />
          <div className='mt-8 text-[32px] font-semibold text-gray-eee'>
            끊임없이 도전하는 모험가, 도전자,
            <br /> 실패도 두려워하지 않는 용기 그 시작을
            <br /> 함께하고자 노력을 아끼지 않는 사람들이 있습니다.
          </div>
          <p className='w-full max-w-[520px] mt-8 text-2xl font-light text-gray-eee'>
            <p>
              리벤처스는 가능성 있는 혁신가들이
              <br /> 자신의 가치를 알아보는 파트너와 만나는 지점에서
              <br /> 더 큰 변화를 만들 수 있다고 믿습니다.
            </p>
            <p className='mt-9'>
              세상을 바꿀 혁신가들의 순수한 이념과 계속되는 도전이 활발하게
              이루어지는 사회를 꿈꿉니다.
            </p>
            <p className='mt-9'>
              투자자와 스타트업의 파트너, 리벤처스
              <br /> All of Starts up’s Partner, Reventures
            </p>
          </p>
        </div>
      </div>
      <div className='py-28 w-full'>
        <div className='w-full max-w-[1142px] mx-auto'>
          <MainSectionTitle title='corporate identity' isDark={false} />
          <div className='w-full flex flex-row gap-14'>
            <div></div>
            <div className='flex flex-col w-full max-w-[530px]'>
              <p>
                혁신가들의 순수한 이념과 계속되는 도전이 활발하게 지속될 수
                있도록 사회가 되는 것을 염원하는 (Re:) 그리고 혁신가들의 모험을
                함께하기 위해 Venture(s)의 의미는 파트너로서 멀리서 응원이 아닌
                함께 성공을 향해 달리는 Own-Onership-Partner가 되고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
