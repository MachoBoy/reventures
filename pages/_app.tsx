import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import { client } from '../lib/apollo';
import ReactModal from 'react-modal';
import Layout from '../components/layout/layout';
import PageTransition from '../components/page-transition/pageTransition';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // Hide splash screen shen we are server side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const video = document.getElementById(
        'globalvideo'
      ) as HTMLElement | null;
      const videoWrapper = document.getElementsByClassName(
        'video-wrapper'
      ) as HTMLCollectionOf<HTMLElement>;
      if (video != null) {
        video.onended = () => {
          videoWrapper[0].style.opacity = '0';
          setTimeout(() => {
            videoWrapper[0].style.display = 'none';
          }, 1000);
        };
      }
    }
  }, []);
  ReactModal.setAppElement('#__next');
  return (
    <Layout>
      <ApolloProvider client={client}>
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </ApolloProvider>
    </Layout>
  );
}

export default MyApp;
