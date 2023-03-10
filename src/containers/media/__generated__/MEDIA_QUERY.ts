/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaStatus } from './../../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: MEDIA_QUERY
// ====================================================

export interface MEDIA_QUERY_Page_pageInfo {
  __typename: 'PageInfo';
  /**
   * The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic
   */
  total: number | null;
  /**
   * The current page
   */
  currentPage: number | null;
  /**
   * The last page
   */
  lastPage: number | null;
  /**
   * If there is another page
   */
  hasNextPage: boolean | null;
  /**
   * The count on a page
   */
  perPage: number | null;
}

export interface MEDIA_QUERY_Page_media_title {
  __typename: 'MediaTitle';
  /**
   * The official english title
   */
  english: string | null;
}

export interface MEDIA_QUERY_Page_media_coverImage {
  __typename: 'MediaCoverImage';
  /**
   * Average #hex color of cover image
   */
  color: string | null;
  /**
   * The cover image url of the media at medium size
   */
  medium: string | null;
}

export interface MEDIA_QUERY_Page_media {
  __typename: 'Media';
  /**
   * The id of the media
   */
  id: number;
  /**
   * The official titles of the media in various languages
   */
  title: MEDIA_QUERY_Page_media_title | null;
  /**
   * The cover images of the media
   */
  coverImage: MEDIA_QUERY_Page_media_coverImage | null;
  /**
   * If the media is marked as favourite by the current authenticated user
   */
  isFavourite: boolean;
  /**
   * The current releasing status of the media
   */
  status: MediaStatus | null;
  /**
   * Short description of the media's story and characters
   */
  description: string | null;
  /**
   * The general length of each anime episode in minutes
   */
  duration: number | null;
  /**
   * The genres of the media
   */
  genres: (string | null)[] | null;
  /**
   * The season year the media was initially released in
   */
  seasonYear: number | null;
  /**
   * The url for the media page on the AniList website
   */
  siteUrl: string | null;
}

export interface MEDIA_QUERY_Page {
  __typename: 'Page';
  /**
   * The pagination information
   */
  pageInfo: MEDIA_QUERY_Page_pageInfo | null;
  media: (MEDIA_QUERY_Page_media | null)[] | null;
}

export interface MEDIA_QUERY {
  Page: MEDIA_QUERY_Page | null;
}

export interface MEDIA_QUERYVariables {
  id?: number | null;
  page?: number | null;
  perPage?: number | null;
  search?: string | null;
}
