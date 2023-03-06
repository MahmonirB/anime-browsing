import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Pagination from 'src/components/pagination/Pagination';
import SearchBar from 'src/components/searchBar/SearchBar';
import Spinner from 'src/components/spinner/Spinner';
import MediaItem from './meidaItem/MediaItem';
import useDebounce from 'src/hooks/useDebounce';
import EmtptyState from 'src/components/emptyState/EmptyState';

const MEDIA = gql`
query MEDIA_QUERY ($id: Int, $page: Int, $perPage: Int, $search: String) {
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

  return (
    <div className='flex flex-col items-center w-full px-1 sm:px-9 pb-4'>
      <h4 className="font-medium leading-tight text-2xl mb-2 text-indigo-700 dark:text-indigo-400 m-4 mt-24">Media List</h4>

      <SearchBar searchText={search} onChangeSearch={setSeach} />

      {loading ? <Spinner /> : <></>}

      {pageData?.Page?.media?.length > 0 && pageData?.Page?.media?.map((mediaItem: any, index: number) =>
        <MediaItem key={index} mediaItemData={mediaItem} />
      )}

      {pageData?.Page?.media?.length > 0 ? <Pagination
        hasNextPage={pageInfo?.hasNextPage}
        total={pageInfo?.total}
        currentPage={pageInfo?.currentPage}
        onChangePage={setCurrentPage}
      />
        : !loading && <EmtptyState />}
    </div>
  );
}
export default Media;
