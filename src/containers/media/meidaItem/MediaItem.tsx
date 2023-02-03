import React from 'react';

function MediaItem({mediaItemData}: any) {
    return (
        <div className=' w-2/3 bg-white flex flex-row justify-between px-8 py-4 my-5 shadow-md shadow-slate-200 rounded-md'>
            <img src={mediaItemData?.coverImage?.medium} width={100} className='rounded-md h-24' />
            <div className='flex flex-col p-4 h-8'>
                <a href={mediaItemData?.siteUrl} >
                    <label className='text-base font-bold'>{mediaItemData?.title?.english}</label>
                    <label className='overflow-hidden truncate w-60 block mt-4 text-gray-500 text-sm'>{mediaItemData?.description}</label>

                </a>
            </div>
            <div className='flex flex-col justify-between pl-4 border-l border-slate-200'>
                <label className='font-bold text-xs text-slate-600'>Duration: {mediaItemData?.duration}</label>
                <label className='font-bold text-xs text-slate-600'>Year: {mediaItemData?.seasonYear}</label>
                <div className=' bg-indigo-400 w-28 h-8 rounded-xl text-center pt-1 text-white'><label className='text-sm font-semibold'>{mediaItemData?.status}</label></div>
            </div>
        </div>
    )
}

export default MediaItem;
