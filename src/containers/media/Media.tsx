import { gql, useQuery } from '@apollo/client';
import React from 'react';
import MediaItem from '../../components/media/MediaItem/mediaItem';

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
      duration
      description
      episodes
      siteUrl
      seasonYear
      genres
    }
}
}`;

function Media() {
  const { data: pageData, loading } = useQuery(MEDIA);
  console.log(pageData)

  return (
    <div>
      {pageData?.Page?.media?.map((mediaItem: any, index: number) => <MediaItem key={index} title={mediaItem.genres.toString()} description={mediaItem.description} imageSource={mediaItem.coverImage.medium} />)}
    </div>
  );
}
export default Media;
