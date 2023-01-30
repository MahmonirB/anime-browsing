import React from 'react';

interface MediaItem {
    description: string;
    imageSource: string;
    title: string;
}

function MediaItem({ description, imageSource, title }: MediaItem) {
    return (
       <div className='flex flex-row w-full h-80 justify-between p-4 align-middle bg-white shadow-lg'>
        <div className='flex'>
            <img src={imageSource} />
        </div>
        <div className='flex'>
            <p>{description}</p>
        </div>
       </div>
    );
}

export default MediaItem;
