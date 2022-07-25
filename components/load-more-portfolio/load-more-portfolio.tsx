import { useEffect, useState, KeyboardEvent } from 'react';
import { useLazyQuery, useQuery, ApolloError } from '@apollo/client';
import PortfolioCard from '../portfolio-card/portfolioCard';
import LoadingButton from '../loading-button/loading-button';
import SectorCategoryButton from '../sector-category-button/SectorCategoryButton';
import { GET_PORTFOLIO_POSTS } from '../../lib/queries/portfolio/get-portfolio';
import {
  PortfolioType,
  PostType,
  PageInfoType,
  CategoryType,
} from '../../data/portfolio-data';

interface Props {
  posts: PostType[];
  pages?: PageInfoType;
  openModal: Function;
  categories?: CategoryType[];
}

const LoadMorePortfolio = ({ posts, pages, openModal, categories }: Props) => {
  const [postsData, setPostsData] = useState(posts ?? []);
  const [pageInfo, setPageInfo] = useState(pages);
  const [error, setError] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [selectedSectorId, setSelectedSectorId] = useState(0);
  const [sectorLoading, setSectorLoading] = useState(false);

  useEffect(() => {
    setPostsData(posts);
    setPageInfo(pages);
    setSelectedSectorId(0);
  }, [posts, pages]);

  const setPosts = (posts: any) => {
    //console.log(posts);
    if (!posts || !posts?.nodes || !posts?.pageInfo) {
      return;
    }

    const portfolioPosts = posts?.nodes.map(
      (post: PortfolioType) => post.portfolio
    );

    if (postsData.length > 0) {
      const newPosts = postsData.concat(portfolioPosts);
      setPostsData(newPosts);
    } else {
      // console.log(portfolioPosts);
      setPostsData(portfolioPosts);
    }
    setPageInfo({ ...posts?.pageInfo });
    setSectorLoading(false);
  };

  const [fetchPosts, { loading }] = useLazyQuery(GET_PORTFOLIO_POSTS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only', // caching이 되지 않도록 매번 fetching
    onCompleted: (data) => {
      //console.log(data);
      setPosts(data?.posts ?? []);
    },
    onError: (error: ApolloError) => {
      setError(error);
    },
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    // console.log(e);
    if (e.key === 'Enter') {
      getSectorItems();
    }
  };

  const getSectorItems = (sectorId?: number | undefined) => {
    setSectorLoading(true);
    setPostsData([]);
    if (sectorId !== undefined) {
      setSelectedSectorId(sectorId);
    }

    let queryVariables = {
      first: 9,
      after: null,
      search: searchValue,
      categoryId: sectorId === 0 ? null : sectorId,
    };

    //console.log(queryVariables);

    fetchPosts({
      variables: queryVariables,
    });
  };

  const loadMoreItems = (endCursor: string | null | undefined) => {
    let queryVariables = {
      first: 9,
      after: endCursor,
      search: searchValue,
      categoryId: null,
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
    <>
      <div className='hidden mt-5 w-full sm:flex flex-row relative sm:flex-col'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='13'
            height='13'
            fill='currentColor'
            className='bi bi-search absolute right-[20px] bottom-[75px] text-[#747474]'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </div>
        <input
          className='w-full max-w-[320px] px-4 py-2 border-[1px] border-[#0000001A] sm:max-w-full'
          type='text'
          placeholder='기업명을 입력해주세요'
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          onClick={() => getSectorItems()}
          className='mt-4 w-full h-[46px] bg-black flex justify-center items-center text-white font-semibold'
        >
          Search
        </button>
      </div>

      <div className='mt-14 uppercase text-xl text-black font-semibold sm:mt-6'>
        sector
      </div>
      <div className=''>
        {categories?.map(({ categoryId, name }, index) => {
          return (
            <SectorCategoryButton
              key={categoryId}
              categoryId={categoryId}
              name={name}
              color='#6D7278'
              textColor='#FEFEFED9'
              selectedSectorId={selectedSectorId}
              getSectorItems={getSectorItems}
            />
          );
        })}
      </div>
      <div className='w-full mt-6 flex justify-end sm:hidden'>
        <div className='flex flex-row relative'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='13'
              fill='currentColor'
              className='bi bi-search absolute right-[120px] bottom-4 text-[#747474]'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </div>
          <input
            className='w-full max-w-[320px] px-4 py-2 border-[1px] border-[#0000001A]'
            type='text'
            placeholder='기업명을 입력해주세요'
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button
            onClick={() => getSectorItems()}
            className='ml-3 w-[135px] h-[46px] bg-black flex justify-center items-center text-white'
          >
            Search
          </button>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center'>
        {!sectorLoading ? (
          <div>
            {postsData.length > 0 ? (
              <div className='w-full grid grid-cols-3 gap-x-2 lg:grid-cols-2 md:grid-cols-1'>
                {postsData.map(
                  (
                    { stage, logo, companyName, sector, companyDesc }: PostType,
                    index: number
                  ) => {
                    return (
                      <div
                        key={index}
                        className='hover:-m-4 transition-[margin]'
                      >
                        <PortfolioCard
                          stage={stage}
                          logo={logo}
                          companyName={companyName}
                          sector={sector}
                          companyDesc={companyDesc}
                          index={index}
                          openModal={() => openModal(postsData, index)}
                        />
                      </div>
                    );
                  }
                )}
              </div>
            ) : (
              <div className='mt-4 h-[455px] flex justify-center items-center'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='bi bi-exclamation-triangle-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
                  </svg>
                </div>
                <div className='text-[22px] text-[#3D3D3D] ml-4'>
                  조건에 맞는 업체가 없습니다
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className='mt-4 h-[455px] flex justify-center items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100px'
              height='100px'
              viewBox='0 0 100 100'
            >
              <path d='M 50,50 L 33,60.5 a 20 20 -210 1 1 34,0 z' fill='#000'>
                <animateTransform
                  attributeName='transform'
                  type='rotate'
                  from='0 50 50'
                  to='360 50 50'
                  dur='1.2s'
                  repeatCount='indefinite'
                />
              </path>
              <circle cx='50' cy='50' r='16' fill='#fff'></circle>
            </svg>
          </div>
        )}

        {!sectorLoading && hasNextPage ? (
          <div className='w-full flex justify-center lg:my-10'>
            {loading ? (
              <LoadingButton />
            ) : (
              <button
                className='w-full max-w-[362px] py-6 px-2 mt-5 mx-auto text-2xl text-center text-white bg-black hover:bg-[#6D7278] transition-colors'
                onClick={() => loadMoreItems(endCursor)}
              >
                더보기
              </button>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default LoadMorePortfolio;
