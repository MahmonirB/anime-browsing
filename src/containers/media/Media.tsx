import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import SearchBar from '../../components/searchBar/SearchBar';
import Spinner from '../../components/spinner/Spinner';
import MediaItem from './meidaItem/MediaItem';
import useDebounce from '../../hooks/useDebounce';

const MEDIA = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        english
      }
      coverImage {
        color
        medium
      }
      isFavourite
      status
      description
      duration
      genres
      seasonYear
      siteUrl
    }
  }
}`;

function Media() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSeach] = useState<string | undefined>();

  const newSearchInput = useDebounce(search, 1000);

  const { data: pageData = {}, loading } = useQuery(MEDIA, {
    variables: {
      page: currentPage,
      perPage: 10,
      search: newSearchInput || undefined
    },
    fetchPolicy: 'cache-and-network',
  });
  const pageInfo = pageData?.Page?.pageInfo;

  if (loading) return <Spinner />

  return (
    <div className='flex flex-col items-center w-full px-1 sm:px-9 py-4'>
      <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-indigo-700 m-4">Media List</h4>
      <SearchBar searchText={search} onChangeSearch={setSeach} />
      {pageData?.Page?.media?.length > 0 && pageData?.Page?.media?.map((mediaItem: any, index: number) =>
        <MediaItem key={index} mediaItemData={mediaItem} />
      )}

      
      {pageInfo?.total ? <Pagination
        hasNextPage={pageInfo?.hasNextPage}
        total={pageInfo?.total}
        currentPage={pageInfo?.currentPage}
        onChangePage={setCurrentPage}
      /> : null}
    </div>
  );
}
export default Media;
