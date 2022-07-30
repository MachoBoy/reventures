import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* HTML Meta Tags */}
        <meta
          name='description'
          content='리벤처스는 기업가 정신과 도덕성을 갖춘 경영진이‌우수한 기술력을 바탕으로 성장 잠재력이 큰 기업에 지원하여‌ 초기벤처기업과 함께 성장하는 기술기반 액셀러레이터입니다.'
        />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content='https://reventures.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='RE:VENTURES - 리벤처스' />
        <meta
          property='og:description'
          content='리벤처스는 기업가 정신과 도덕성을 갖춘 경영진이‌우수한 기술력을 바탕으로 성장 잠재력이 큰 기업에 지원하여‌ 초기벤처기업과 함께 성장하는 기술기반 액셀러레이터입니다.'
        />
        <meta
          property='og:image'
          content='https://reventures-vc.com/wp-content/uploads/2022/06/대지-1@3x-1-e1654143103961.png'
        />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='reventures.vercel.app' />
        <meta property='twitter:url' content='https://reventures.vercel.app/' />
        <meta name='twitter:title' content='RE:VENTURES - 리벤처스' />
        <meta
          name='twitter:description'
          content='리벤처스는 기업가 정신과 도덕성을 갖춘 경영진이‌우수한 기술력을 바탕으로 성장 잠재력이 큰 기업에 지원하여‌ 초기벤처기업과 함께 성장하는 기술기반 액셀러레이터입니다.'
        />
        <meta
          name='twitter:image'
          content='https://reventures-vc.com/wp-content/uploads/2022/06/대지-1@3x-1-e1654143103961.png'
        />
        <link
          rel='stylesheet'
          as='style'
          crossOrigin='true'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>
      <body>
        {/* <div className='video-wrapper fixed w-full h-screen z-[100] bg-black sm:hidden'>
          <video
            id='globalvideo'
            autoPlay
            muted
            className='w-full h-full absolute inset-0'
          >
            <source src='intro.mp4' type='video/mp4' />
          </video>
        </div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
