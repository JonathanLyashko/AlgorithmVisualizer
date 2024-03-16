'use client'
import React, { useState } from 'react';
import ControlPanel from '@/components/ControlPanel'; // Adjust the path as necessary
import VisualBox from '@/components/VisualBox'; // Adjust the path as necessary

export default function Home() {
  const [size, setSize] = useState(100);
  const [valsArr, setValsArr] = useState(generate_array(size));
  const [rate, setRate] = useState(1);

  return (
    <main>
      <ControlPanel valsArr={valsArr} setValsArr={setValsArr} generateArray={generate_array} size={size} setSize={setSize} rate={rate} setRate={setRate} />
      <VisualBox valsArr={valsArr} />
    </main>
  );
}

// This function should be placed in a utilities file or the same file, if you prefer.
function generate_array(n) {
  return Array.from({ length: n }, () => ({
    value: Math.floor(Math.random() * (500 - 120) + 120),
    color: "blue"
  }));
}

