import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import Spinner from '../../components/spinner/Spinner';
import MediaItem from './meidaItem/MediaItem';

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
  const { data: pageData = {}, loading } = useQuery(MEDIA, {
    variables: {
      page: currentPage,
      perPage: 10
    },
    fetchPolicy: 'cache-and-network',
  });
  const pageInfo = pageData?.Page?.pageInfo;

  if (loading) return <Spinner />

  return (
    <div className='flex flex-col items-center w-full px-1 sm:px-9 py-4'>
      {pageData?.Page?.media?.length > 0 && pageData?.Page?.media?.map((mediaItem: any, index: number) =>
        <MediaItem key={index} mediaItemData={mediaItem} />
      )}

      <Pagination
        hasNextPage={pageInfo?.hasNextPage}
        total={pageInfo?.total}
        currentPage={pageInfo?.currentPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}
export default Media;
