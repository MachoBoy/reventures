import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
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
        <div className='video-wrapper fixed w-full h-screen z-[100] bg-black'>
          <video
            id='globalvideo'
            autoPlay
            muted
            className='w-full h-full absolute left-0 -top-14'
          >
            <source src='intro.mp4' type='video/mp4' />
          </video>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
