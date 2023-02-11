import React, { useState } from 'react';

interface AlertProp {
    title: string;
    content: string;
    onClose(): void;
}

function Alert({ title, content, onClose }: AlertProp) {
    return (
        <div className="alert bg-cyan-100 text-grey-900 rounded-lg py-5 px-6 mb-3 text-base inline-flex items-center absolute right-8 left-8 bottom-12 alert-dismissible fade show" role="alert">
            <strong className="mr-1">{title}</strong>{content}
            <button type="button" onClick={onClose} className="box-content w-4 h-4 p-1 ml-auto text-grey-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-grey-500 hover:opacity-75 hover:no-underline">X</button>
        </div>
    )
}

export default Alert;
