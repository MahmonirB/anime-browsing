import React from 'react';

interface TextStructure {
  type: 'description' | 'title' | 'detail';
  title?: string;
  content?: string;
  textLink?: string;
}

function TextStructure({ type, title = '', content = '', textLink = '' }: TextStructure) {
  const textFormat = {
    title: <span className="py-1 text-base font-bold">{title}</span>,
    description: (
      <span className="mt-4 block w-16 overflow-hidden truncate py-1 text-sm text-gray-500 dark:text-gray-400 sm:w-32 lg:w-60">
        {content}
      </span>
    ),
    detail: (
      <span className="py-1 text-xs font-bold text-slate-600 dark:text-slate-300">
        {title}: {content}
      </span>
    ),
  };

  if (textLink) return <a href={textLink}>{textFormat[type]}</a>;

  return textFormat[type];
}

export default TextStructure;
