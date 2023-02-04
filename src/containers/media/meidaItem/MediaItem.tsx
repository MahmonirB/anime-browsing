import React from 'react';
import TextStructure from '../../../components/textStructure/TextStructure';
import Tips from '../../../components/tips/Tips';

function MediaItem({ mediaItemData }: any) {
    return (
        <div className='w-2/3 bg-white flex flex-row justify-between px-8 py-4 my-5 shadow-md shadow-slate-200 rounded-md'>
            <div className='flex flex-row'>
                <a href={mediaItemData?.siteUrl} className='flex'>
                    <img src={mediaItemData?.coverImage?.medium} width={100} className='rounded-md h-24' />
                </a>
                <div className='flex flex-col p-4 h-8 ml-6'>
                    <TextStructure type='title' title={mediaItemData?.title?.english} textLink={mediaItemData?.siteUrl} />
                    <TextStructure type='description' content={mediaItemData?.description} />
                </div>
            </div>
            <div className='flex flex-col justify-between pl-4 border-l border-slate-200'>
                <TextStructure type='detail' title='Duration' content={mediaItemData?.duration} />
                <TextStructure type='detail' title='Year' content={mediaItemData?.seasonYear} />
                <Tips title={mediaItemData?.status} type='primary' size='medium' />
            </div>
        </div>
    )
}

export default MediaItem;
