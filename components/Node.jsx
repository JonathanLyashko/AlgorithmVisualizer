import React from 'react';

// Assuming that Node is a presentational component that takes a 'height' prop
const Node = ({ height, color }) => {
  // Style the Node component as needed, possibly using the 'height' prop for dynamic styling
  return (
    <div className='bg-black' style={{ height, width: 10, backgroundColor: color}}>
      {/* Content of the node */}
    </div>
  );
};

export default Node;
