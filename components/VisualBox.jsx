import React from 'react';
import Node from './Node'; // Adjust the path as necessary

function VisualBox({ valsArr }) {
  return (
    <div className='w-4/5 h-screen mx-auto flex items-start justify-center gap-1'>
      {valsArr.map((item, index) => (
        <Node key={index} height={item.value} color={item.color} />
      ))}
    </div>
  );
}

export default VisualBox;
