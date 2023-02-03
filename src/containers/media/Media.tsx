import { gql, useQuery } from '@apollo/client';
import React from 'react';
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
    }
  }
}`;

function Media() {
  const { data: pageData, loading } = useQuery(MEDIA);

  if (loading) return <Spinner />

  return (
    <div className='flex flex-col items-center w-full px-9 py-4'>
      {pageData?.Page?.media?.length > 0 && pageData?.Page?.media?.map((mediaItem: any) =>
        <MediaItem mediaItemData={mediaItem} />
      )}
    </div>
  );
}
export default Media;
