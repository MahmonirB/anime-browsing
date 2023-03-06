import React from 'react';
import TextStructure from 'src/components/textStructure/TextStructure';
import Tips from 'src/components/tips/Tips';

function MediaItem({ mediaItemData }: any) {
    return (
        <div className='w-2/3 bg-white dark:bg-stone-800 flex lg:flex-row flex-col justify-between px-8 py-4 my-5 shadow-md shadow-slate-200 rounded-md'>
            <div className='flex lg:flex-row flex-col'>
                <a href={mediaItemData?.siteUrl} className='flex m-auto'>
                    <img src={mediaItemData?.coverImage?.medium} width={100} className='rounded-md max-w-100 min-w-100 w-100 h-24' />
                </a>
                <div className='flex flex-col p-4 h-full sm:text-center lg:ml-6 m-auto'>
                    <TextStructure type='title' title={mediaItemData?.title?.english} textLink={mediaItemData?.siteUrl} />
                    <TextStructure type='description' content={mediaItemData?.description} />
                </div>
            </div>
            <div className='flex lg:flex-col sm:flex-row flex-col sm:text-center items-center lg:items-baseline sm:items-center justify-between pl-4 lg:border-l lg:border-slate-200'>
                <TextStructure type='detail' title='Duration' content={mediaItemData?.duration} />
                <TextStructure type='detail' title='Year' content={mediaItemData?.seasonYear} />
                <Tips title={mediaItemData?.status} type='primary' size='medium' />
            </div>
        </div>
    )
}

export default MediaItem;
