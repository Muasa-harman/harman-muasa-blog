import React from 'react';

const Card = () => {
  const title = "Introduction to TypeScript";
  const language = "TypeScript";
  const imageUrl = "https://via.placeholder.com/300x200"; 
  const date = "12/07/2024";
  const readTime = "1 min read";
  const items = [
    "A process is an instance of a program (like Python interpreter)",
    "Takes advantage of multiple CPU-bound cores",
    "Separate memory space",
    "Great for CPU-bound processes",
    "One GIL for each process",
    "Heavyweight",
    "Processes are interruptible",
  ];

  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-xl font-semibold p-4">{title}</h2>
      <p className="text-white px-4">{language}</p>
      <img src={imageUrl} alt="Card" className="w-full h-48 object-cover" />
      <div className="flex justify-between items-center p-4 text-white text-sm">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
      <ul className="px-4 pb-4 text-white list-disc list-inside space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
