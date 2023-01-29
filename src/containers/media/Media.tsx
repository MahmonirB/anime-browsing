import { gql, useQuery } from '@apollo/client';
import React from 'react';

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
    }
  }
}`;

function Media() {
    const { data: Page } = useQuery(MEDIA);
    console.log(Page)

    return (
        <div></div>
    );
}
export default Media;