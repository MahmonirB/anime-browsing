import React, { useState } from 'react';

interface AlertProp {
  title: string;
  content: string;
  onClose(): void;
}

function Alert({ title, content, onClose }: AlertProp) {
  return (
    <div
      className="alert text-grey-900 alert-dismissible fade show absolute right-8 left-8 bottom-12 mb-3 inline-flex items-center rounded-lg bg-cyan-100 py-5 px-6 text-base"
      role="alert"
    >
      <strong className="mr-1">{title}</strong>
      {content}
      <button
        type="button"
        onClick={onClose}
        className="text-grey-900 hover:text-grey-500 ml-auto box-content h-4 w-4 rounded-none border-none p-1 opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
      >
        X
      </button>
    </div>
  );
}

export default Alert;
