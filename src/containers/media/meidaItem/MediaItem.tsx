import React from 'react';
import TextStructure from 'src/components/textStructure/TextStructure';
import Tips from 'src/components/tips/Tips';
import { MEDIA_QUERY_Page_media } from '../__generated__/MEDIA_QUERY';

function MediaItem({ mediaItemData }: { mediaItemData: MEDIA_QUERY_Page_media }) {
  return (
    <div className="my-5 flex w-2/3 flex-col justify-between rounded-md bg-white px-8 py-4 shadow-md shadow-slate-200 dark:bg-stone-800 lg:flex-row">
      <div className="flex flex-col lg:flex-row">
        <a href={mediaItemData?.siteUrl || undefined} className="m-auto flex">
          <img
            src={mediaItemData?.coverImage?.medium || undefined}
            width={100}
            className="h-24 w-100 min-w-100 max-w-100 rounded-md"
          />
        </a>
        <div className="m-auto flex h-full flex-col p-4 sm:text-center lg:ml-6">
          <TextStructure
            type="title"
            title={mediaItemData?.title?.english || ''}
            textLink={mediaItemData?.siteUrl || ''}
          />
          <TextStructure type="description" content={mediaItemData?.description || ''} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between pl-4 sm:flex-row sm:items-center sm:text-center lg:flex-col lg:items-baseline lg:border-l lg:border-slate-200">
        <TextStructure type="detail" title="Duration" content={mediaItemData?.duration || undefined} />
        <TextStructure type="detail" title="Year" content={mediaItemData?.seasonYear || undefined} />
        <Tips title={mediaItemData?.status || ''} type="primary" size="medium" />
      </div>
    </div>
  );
}

export default MediaItem;
