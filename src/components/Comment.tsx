'use client'

import React, { useState } from 'react';

const Comment = () => {
  const [comment, setComment] = useState('');
  const maxCharacters = 200;

  const handleCommentChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted Comment:', comment);
    setComment(''); 
  };

  return (
    <div className="max-w-md p-4 border border-gray-300 rounded-lg shadow-sm">
      <span className="block text-lg font-semibold mb-2">Add a Comment</span>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        maxLength={maxCharacters}
        placeholder="Write your comment..."
        className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
      ></textarea>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-500">
          {maxCharacters - comment.length} characters remaining
        </span>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          disabled={comment.length === 0}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Comment;
