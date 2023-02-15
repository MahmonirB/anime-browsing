import React from 'react';

interface TextStructure {
    type: 'description' | 'title' | 'detail',
    title?: string;
    content?: string;
    textLink?: string;
}

function TextStructure({ type, title = '', content = '', textLink = '' }: TextStructure) {

    const textFormat = {
        title: <span className='text-base font-bold py-1'>{title}</span>,
        description: <span className='overflow-hidden truncate lg:w-60 sm:w-32 w-16 block mt-4 text-gray-500 dark:text-gray-400 text-sm py-1'>{content}</span>,
        detail: <span className='font-bold text-xs text-slate-600 dark:text-slate-300 py-1'>{title}: {content}</span>
    };

    if (textLink) return <a href={textLink}>{textFormat[type]}</a>;

    return textFormat[type];
}

export default TextStructure;
