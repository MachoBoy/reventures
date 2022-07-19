import { useEffect, useState } from 'react';
import { useLazyQuery, ApolloError } from '@apollo/client';
import { GET_PORTFOLIO_POSTS } from '../../lib/queries/portfolio/get-portfolio';
import PortfolioCard from '../portfolio-card/portfolioCard';
import LoadingButton from '../loading-button/loading-button';
import {
  PortfolioType,
  PostType,
  PageInfoType,
} from '../../data/portfolio-data';

interface Props {
  posts: PostType[];
  pages?: PageInfoType;
  openModal: Function;
}

const LoadMorePortfolio = ({ posts, pages, openModal }: Props) => {
  const [postsData, setPostsData] = useState(posts ?? []);
  const [pageInfo, setPageInfo] = useState(pages);
  const [error, setError] = useState({});

  useEffect(() => {
    setPostsData(posts);
    setPageInfo(pages);
  }, [posts, pages]);

  const setPosts = (posts: any) => {
    console.log(posts);
    if (!posts || !posts?.nodes || !posts?.pageInfo) {
      return;
    }

    const portfolioPosts = posts?.nodes.map(
      (post: PortfolioType) => post.portfolio
    );

    const newPosts = postsData.concat(portfolioPosts);
    // console.log(newPosts);
    setPostsData(newPosts);
    setPageInfo({ ...posts?.pageInfo });
  };

  const [fetchPosts, { loading }] = useLazyQuery(GET_PORTFOLIO_POSTS, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setPosts(data?.posts ?? []);
    },
    onError: (error: ApolloError) => {
      setError(error);
    },
  });

  const loadMoreItems = (endCursor: string | null | undefined) => {
    let queryVariables = {
      first: 9,
      after: endCursor,
    };

    // If its a search query then add the query in the query variables.
    // if (!isEmpty(searchQuery)) {
    //   queryVariables.query = searchQuery;
    // }

    fetchPosts({
      variables: queryVariables,
    });
  };

  const { endCursor, hasNextPage } = pageInfo || {};

  if (Object.keys(error).length !== 0) {
    console.error(error);
    return (
      <div className='mt-4 h-[455px] border-[1px] border-[#0000001A] flex justify-center items-center'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            fill='currentColor'
            className='bi bi-cone-striped text-[#3D3D3D]'
            viewBox='0 0 16 16'
          >
            <path d='m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z' />
          </svg>
        </div>
        <div className='text-[22px] text-[#3D3D3D] ml-4'>
          서비스 연결이 원활하지 않습니다
        </div>
      </div>
    );
  }

  return (
    <div className='w-full flex flex-col justify-center'>
      <div className='w-full grid grid-cols-3 gap-x-2'>
        {postsData.map(
          (
            { stage, logo, companyName, sector, companyDesc }: PostType,
            index: number
          ) => {
            return (
              <PortfolioCard
                key={index}
                stage={stage}
                logo={logo}
                companyName={companyName}
                sector={sector}
                companyDesc={companyDesc}
                index={index}
                openModal={() => openModal(postsData, index)}
              />
            );
          }
        )}
      </div>
      {hasNextPage ? (
        <div className='w-full flex justify-center lg:my-10'>
          {loading ? (
            <LoadingButton />
          ) : (
            <button
              className='w-full max-w-[362px] py-6 px-2 mt-5 mx-auto bg-black text-2xl text-center text-white'
              onClick={() => loadMoreItems(endCursor)}
            >
              더보기
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default LoadMorePortfolio;
