// 컴포넌트 포트폴리오 props 타입
export interface PortfolioProps {
  portfolioPosts: PostType[];
  pageInfo?: PageInfoType;
  categories?: CategoryType[];
  sliderPosts?: PostType[];
}
// 포트폴리오 타입
export interface PortfolioType {
  portfolio: PostType;
}
// 포트폴리오 포스트 타입
export interface PostType {
  stage: string | null;
  ceoName: string | null;
  logo: LogoType;
  companyName: string | null;
  companyDesc: string | null;
  foundDate: string | null;
  location: string | null;
  sector: string | null;
  __typename: string | null;
}
// 포트폴리오 로고 이미지 타입
export interface LogoType {
  sourceUrl: string;
  __typename: string;
}
// 포트폴리오 페이지네이션 타입
export interface PageInfoType {
  endCursor: string | null;
  hasNextPage: boolean | null;
  __typename: string | null;
}

export interface CategoryType {
  categoryId: number | null;
  name: string | null;
  __typename: string | null;
}

export const portfolioData = [
  {
    stage: 'Pre-A',
    logo: '/logo/nhnovatech.png',
    company: '(주)HN노바텍',
    sector: 'Food-Tech',
    desc: "해조류 추출 헴분자('아미노산 복합체'(ACOM-S)) 기반 대체육류 식품개발",
    boss: '김양희',
    location: '(38662) 경북 경산시 펜타힐즈2로 41, 505호 (중산동,화성빌딩)',
    date: '2020-06-01',
  },
  {
    stage: 'Seed',
    logo: '/logo/rctech.png',
    company: '㈜알씨테크',
    sector: '전자제품/반도체(분야)',
    desc: '디퓨전(Diffusion)-폴리(Poly) 장비의 노화 및 단종 모델의 리인벤팅(Reinventing, 재탄생)',
    boss: '임태화',
    location: '(16229) 경기 수원시 영통구 광교로 105, 보육동 309호 (이의동)',
    date: '2019-08-12',
  },
  {
    stage: 'Series B',
    logo: '/logo/whatap.png',
    company: '㈜와탭랩스',
    sector: 'IT/SaaS',
    desc: "‘액티브 스택’ 애플리케이션 모니터링 '쿠버네티스 SaaS 솔루션'",
    boss: '이동인',
    location: '(06614) 서울 서초구 서초대로77길 17, 13층 1303호 (서초동,)',
    date: '2015-07-01',
  },
  {
    stage: 'Series A',
    logo: '/logo/rebellion.png',
    company: '㈜리벨리온',
    sector: '전자제품/반도체(분야)',
    desc: '인공지능(AI) 반도체 설계(팹리스)',
    boss: '박성현',
    location:
      '(13556) 경기 성남시 분당구 정자일로 239, 102동 908호 (정자동,아이파크분당1)',
    date: '2020-06-23',
  },
  {
    stage: 'Series A',
    logo: '/logo/greenbio.png',
    company: '㈜그린바이오',
    sector: '화학/신소재(분야)',
    desc: '생분해성 플라스틱 컴파운드 원료 및 완제(사출)',
    boss: '한상훈',
    location: '(61008) 광주 북구 첨단과기로 333, 201호',
    date: '2016-11-01',
  },
  {
    stage: 'Series A',
    logo: '/logo/jhengineering.png',
    company: '㈜JH엔지니어링',
    sector: '전자제품/반도체(분야)',
    desc: '실리콘 웨이퍼 핵심 소재인 ‘잉곳’생산에 필요한 초전도 자석 및 저온 냉각용기 개발',
    boss: '이승제',
    location: '(14119) 경기 안양시 동안구 엘에스로91번길 32-19 (호계동)',
    date: '2010-01-05',
  },
  {
    stage: 'Pre-A',
    logo: '/logo/nhnovatech.png',
    company: '(주)HN노바텍',
    sector: 'Food-Tech',
    desc: "해조류 추출 헴분자('아미노산 복합체'(ACOM-S)) 기반 대체육류 식품개발",
    boss: '김양희',
    location: '(38662) 경북 경산시 펜타힐즈2로 41, 505호 (중산동,화성빌딩)',
    date: '2020-06-01',
  },
  {
    stage: 'Seed',
    logo: '/logo/rctech.png',
    company: '㈜알씨테크',
    sector: '전자제품/반도체(분야)',
    desc: '디퓨전(Diffusion)-폴리(Poly) 장비의 노화 및 단종 모델의 리인벤팅(Reinventing, 재탄생)',
    boss: '임태화',
    location: '(16229) 경기 수원시 영통구 광교로 105, 보육동 309호 (이의동)',
    date: '2019-08-12',
  },
  {
    stage: 'Series B',
    logo: '/logo/whatap.png',
    company: '㈜와탭랩스',
    sector: 'IT/SaaS',
    desc: "‘액티브 스택’ 애플리케이션 모니터링 '쿠버네티스 SaaS 솔루션'",
    boss: '이동인',
    location: '(06614) 서울 서초구 서초대로77길 17, 13층 1303호 (서초동,)',
    date: '2015-07-01',
  },
  {
    stage: 'Series A',
    logo: '/logo/rebellion.png',
    company: '㈜리벨리온',
    sector: '전자제품/반도체(분야)',
    desc: '인공지능(AI) 반도체 설계(팹리스)',
    boss: '박성현',
    location:
      '(13556) 경기 성남시 분당구 정자일로 239, 102동 908호 (정자동,아이파크분당1)',
    date: '2020-06-23',
  },
  {
    stage: 'Series A',
    logo: '/logo/greenbio.png',
    company: '㈜그린바이오',
    sector: '화학/신소재(분야)',
    desc: '생분해성 플라스틱 컴파운드 원료 및 완제(사출)',
    boss: '한상훈',
    location: '(61008) 광주 북구 첨단과기로 333, 201호',
    date: '2016-11-01',
  },
  {
    stage: 'Series A',
    logo: '/logo/jhengineering.png',
    company: '㈜JH엔지니어링',
    sector: '전자제품/반도체(분야)',
    desc: '실리콘 웨이퍼 핵심 소재인 ‘잉곳’생산에 필요한 초전도 자석 및 저온 냉각용기 개발',
    boss: '이승제',
    location: '(14119) 경기 안양시 동안구 엘에스로91번길 32-19 (호계동)',
    date: '2010-01-05',
  },
];
