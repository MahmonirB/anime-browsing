import React from 'react';

interface TextStructure {
    type: 'description' | 'title' | 'detail',
    title?: string;
    content?: string;
    textLink?: string;
}

function TextStructure({ type, title = '', content = '', textLink = '' }: TextStructure) {

    const textFormat = {
        title: <span className='text-base font-bold'>{title}</span>,
        description: <span className='overflow-hidden truncate w-60 block mt-4 text-gray-500 text-sm'>{content}</span>,
        detail: <span className='font-bold text-xs text-slate-600'>{title}: {content}</span>
    };

    if (textLink) return <a href={textLink}>{textFormat[type]}</a>;

    return textFormat[type];
}

export default TextStructure;
