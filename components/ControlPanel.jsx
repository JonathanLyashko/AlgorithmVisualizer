import React, { useEffect } from 'react';
import { useState, useReducer } from 'react';


function ControlPanel({ valsArr, setValsArr, generateArray, size, setSize, rate, setRate }) {

    const [isSorting, setIsSorting] = useState(false);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const [sizeButtons, setSizeButtons] = useState([
        {
            id: 'Small',
            size: 25,
            background: "rgb(38 38 38 / var(--tw-bg-opacity))"
        },
        {
            id: 'Medium',
            size: 50,
            background: "rgb(38 38 38 / var(--tw-bg-opacity))"
        },
        {
            id: 'Large',
            size: 100,
            background: "rgb(8 145 178 / var(--tw-bg-opacity))"
        },
    ])
    
    const rates = {
        "Small": 50,
        "Medium": 25,
        "Large": 1,
    }
    
    const handleRandomize = () => {
        setValsArr(generateArray(size));
    }

    const handleSizeChange = (params) => {
        console.log(params.target.innerHTML)
        setSize(params.target.value);

        for (let i = 0; i < sizeButtons.length; i++) {
            sizeButtons[i].background = sizeButtons[i].size == params.target.value ? "rgb(8 145 178 / var(--tw-bg-opacity))" : "rgb(38 38 38 / var(--tw-bg-opacity))"
        }

        setRate(rates[params.target.innerHTML])

    }

    useEffect(() => {
        handleRandomize();
    }, [size])

    const handleBubbleSort = () => {
        setIsSorting(true)
        // Clone valsArr to avoid direct mutation and start sorting
        bubbleSort([...valsArr], setValsArr, rate).then(() => {
            const resetColorsArray = valsArr.map(item => ({ ...item, color: 'blue' }));
            setValsArr(resetColorsArray); // Update the state with all colors reset to blue
            setIsSorting(false)  
        })
    }

    const handleInsertionSort = () => {
        setIsSorting(true)
        // Clone valsArr to avoid direct mutation and start sorting
        insertionSort([...valsArr], setValsArr, rate).then(() => {
           /*  const resetColorsArray = valsArr.map(item => ({ ...item, color: 'blue' }));
            setValsArr(resetColorsArray); // Update the state with all colors reset to blue */
            setIsSorting(false)  
        })
    }

    const handleQuickSort = () => {
        setIsSorting(true)
        // Clone valsArr to avoid direct mutation and start sorting
        quickSort([...valsArr], setValsArr, rate).then(() => {
           /*  const resetColorsArray = valsArr.map(item => ({ ...item, color: 'blue' }));
            setValsArr(resetColorsArray); // Update the state with all colors reset to blue */
            setIsSorting(false)  
        })
    }

    const handleHeapSort = () => {
        setIsSorting(true)
        // Clone valsArr to avoid direct mutation and start sorting
        heapSort([...valsArr], setValsArr, rate).then(() => {
           /*  const resetColorsArray = valsArr.map(item => ({ ...item, color: 'blue' }));
            setValsArr(resetColorsArray); // Update the state with all colors reset to blue */
            setIsSorting(false)  
        })
    }

    const handleMergeSort = () => {
        setIsSorting(true)
        // Clone valsArr to avoid direct mutation and start sorting
        mergeSort([...valsArr], setValsArr, rate).then(() => {
           /*  const resetColorsArray = valsArr.map(item => ({ ...item, color: 'blue' }));
            setValsArr(resetColorsArray); // Update the state with all colors reset to blue */
            setIsSorting(false)  
        })
    }
    
    return (
    <div className='absolute h-[7rem] w-full bg-neutral-300 flex items-center justify-center gap-4 border-b-2 border-black'>
      <button onClick={handleRandomize} disabled={isSorting} className='px-4 py-2 bg-cyan-600 hover:bg-black text-white font-semibold rounded-xl border-2 border-black'>
        Randomize
      </button>
      {/* <button onClick={handleSort} disabled={isSorting} className='px-4 py-2 bg-slate-800 hover:bg-blue text-white font-semibold rounded-xl border-2 border-black'>
        Sort
      </button> */}

        <div className='w-[1rem] h-full bg-black'>

        </div>
        
        <div className='flex flex-col items-center justify-center gap-2'>
            <div className='flex items-center justify-center gap-2'>
                <button onClick={handleMergeSort} disabled={isSorting} className='text-md bg-neutral-800 text-white py-2 px-4 border border-black rounded-xl hover:bg-black'>
                    Merge Sort
                </button>
                <button onClick={handleHeapSort} disabled={isSorting} className='text-md bg-neutral-800 text-white py-2 px-4 border border-black rounded-xl hover:bg-black'>
                    Heap Sort
                </button>
                <button onClick={handleQuickSort} disabled={isSorting} className='text-md bg-neutral-800 text-white py-2 px-4 border border-black rounded-xl hover:bg-black'>
                    Quick Sort
                </button>

            </div>

            <div className='flex items-center justify-center gap-2'>
                <button onClick={handleInsertionSort} disabled={isSorting} className='text-md bg-neutral-800 text-white py-2 px-4 border border-black rounded-xl hover:bg-black'>
                    Insertion Sort
                </button>
                <button onClick={handleBubbleSort} disabled={isSorting} className='text-md bg-neutral-800 text-white py-2 px-4 border border-black rounded-xl hover:bg-black'>
                    Bubble Sort
                </button>

            </div>

        </div>

        <div className='w-[1rem] h-full bg-black'>

        </div>

        <div className='flex items-center justify-center gap-2'>

            {sizeButtons.map((button, index) => {
                return <button 
                        key={index} 
                        value={button.size}
                        onClick={handleSizeChange} 
                        disabled={isSorting} 
                        className='text-md text-white py-2 px-4 border-2 border-black rounded-xl hover:bg-black'
                        style={{backgroundColor: button.background}}
                        >
                            {button.id}
                        </button>
            })}

        </div>

    </div>
  );
}

export default ControlPanel;


// Bubble sort with delay function
// Ensure the bubbleSort function handles elements as objects
async function bubbleSort(arr, setValsArr, delayMs) {
    let n = arr.length;
    for (let pass = 0; pass < n; pass++) {
      for (let i = 0; i < n - pass - 1; i++) {
        arr[i].color = "green";
        arr[i + 1].color = "green";

        if (arr[i].value > arr[i + 1].value) {
          // Update colors for visualization
          arr[i].color = "red";
          arr[i + 1].color = "red";

          // Swap the value properties of the objects
          let temp = arr[i].value;
          arr[i].value = arr[i + 1].value;
          arr[i + 1].value = temp;

          // Set the state to the new array to trigger re-rendering
          setValsArr([...arr]);
          // Delay for visualization purposes
          await delay(delayMs);
        }
        // Reset colors after swap visualization
        arr[i].color = "blue";
        arr[i + 1].color = "blue";

      }
    }
  }

async function insertionSort(arr, setValsArr, delayMs) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      // Choosing the first element in our unsorted subarray
      let current = arr[i];
      arr[i].color = "green"; // Color the current element being compared
      setValsArr([...arr]);
      await delay(delayMs);
  
      let j = i - 1; // The last element of our sorted subarray
      // Now we will move elements of arr[0..i-1], that are greater than current,
      // to one position ahead of their current position
      while ((j > -1) && (current.value < arr[j].value)) {
        arr[j].color = "red"; // Color the element being compared with current
        setValsArr([...arr]);
        await delay(delayMs);
        arr[j].color = "blue";
  
        arr[j + 1] = arr[j];
        j--;
      }
      current.color = "blue"; // Reset the color of the current element
      if (j >= 0) {
        arr[j].color = "blue"; // Reset the color if we moved any element
      }
      arr[j + 1] = current;
      
      // Update the state to the new array to trigger re-rendering
      setValsArr([...arr]);
      await delay(delayMs); // Delay for visualization purposes
    }
    // Finally, make sure all elements are blue
    for (let k = 0; k < n; k++) {
      arr[k].color = "blue";
    }
    setValsArr([...arr]);
}

async function quickSort(arr, setValsArr, delayMs, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return;
    }
    
    // Pivot selection and partitioning steps
    let index = await partition(arr, setValsArr, delayMs, start, end);
    
    // Color the pivot element
    arr[index].color = "green";
    setValsArr([...arr]);
    await delay(delayMs);
    arr[index].color = "blue";

    // Recursively apply the same logic to the sub-array of elements with smaller values
    await quickSort(arr, setValsArr, delayMs, start, index - 1);

    // Recursively apply the same logic to the sub-array of elements with greater values
    await quickSort(arr, setValsArr, delayMs, index + 1, end);

    // Finally, ensure all elements are blue if the entire array is sorted
    if (start === 0 && end === arr.length - 1) {
        for (let k = 0; k < arr.length; k++) {
            arr[k].color = "blue";
        }
        setValsArr([...arr]);
    }
}

async function partition(arr, setValsArr, delayMs, start, end) {
    // Taking the last element as the pivot
    const pivotValue = arr[end].value;
    arr[end].color = "red";
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        arr[i].color = "yellow"; // Color current element being compared
        setValsArr([...arr]);
        await delay(delayMs);
        
        if (arr[i].value < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            arr[pivotIndex].color = "orange"; // Color the element being moved
            setValsArr([...arr]);
            await delay(delayMs);
            
            arr[pivotIndex].color = "blue"; // Reset color of the element being moved
            pivotIndex++;
        }
        arr[i].color = "blue"; // Reset color of current element
    }

    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    arr[end].color = "blue";
    setValsArr([...arr]);
    await delay(delayMs);

    return pivotIndex;
}

async function heapSort(arr, setValsArr, delayMs) {
    let n = arr.length;
  
    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i, setValsArr, delayMs);
    }
  
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      arr[0].color = "red"; // Color the root being moved
      arr[i].color = "red"; // Color the end being swapped with
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setValsArr([...arr]);
      await delay(delayMs);
  
      // call max heapify on the reduced heap
      await heapify(arr, i, 0, setValsArr, delayMs);
  
      // Reset color of the last element
      arr[i].color = "blue";
      setValsArr([...arr]);
      await delay(delayMs);
    }
  
    // Ensure all items are "blue" after sort is complete
    for (let i = 0; i < n; i++) {
      arr[i].color = "blue";
    }
    setValsArr([...arr]);
  }
  
  // To heapify a subtree rooted with node i which is an index in arr[]
  async function heapify(arr, n, i, setValsArr, delayMs) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2
  
    // If left child is larger than root
    if (l < n && arr[l].value > arr[largest].value) {
      largest = l;
    }
  
    // If right child is larger than largest so far
    if (r < n && arr[r].value > arr[largest].value) {
      largest = r;
    }
  
    // If largest is not root
    if (largest !== i) {
      arr[i].color = "green"; // Color the current root
      arr[largest].color = "green"; // Color the larger child
  
      setValsArr([...arr]);
      await delay(delayMs);
  
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
  
      // Recursively heapify the affected sub-tree
      await heapify(arr, n, largest, setValsArr, delayMs);
  
      // Reset colors after heapify
      arr[i].color = "blue";
      arr[largest].color = "blue";
      setValsArr([...arr]);
      await delay(delayMs);
    }
  }

  async function mergeSort(arr, setValsArr, delayMs, start = 0, end = arr.length - 1) {
    if (start < end) {
        const middle = Math.floor((start + end) / 2);
        await mergeSort(arr, setValsArr, delayMs, start, middle);
        await mergeSort(arr, setValsArr, delayMs, middle + 1, end);
        await merge(arr, setValsArr, delayMs, start, middle, end);
    }
}

async function merge(arr, setValsArr, delayMs, start, middle, end) {
    let start2 = middle + 1;

    // If the direct merge is already sorted
    if (arr[middle].value <= arr[start2].value) {
        return;
    }

    // Two pointers to maintain start of both arrays to merge
    while (start <= middle && start2 <= end) {
        // If element 1 is in right place
        if (arr[start].value <= arr[start2].value) {
            start++;
        } else {
            let value = arr[start2].value;
            let index = start2;

            // Shift all the elements between element 1
            // element 2, right by 1.
            while (index !== start) {
                arr[index].value = arr[index - 1].value;
                arr[index].color = "red"; // Mark the element that is being moved
                index--;
            }
            arr[start].value = value;

            // Update the colors to indicate the movement
            arr[start].color = "green"; // New position for moved element
            setValsArr([...arr]);
            await delay(delayMs);

            // Reset the color
            arr[start].color = "blue";

            // Update the pointers
            start++;
            middle++;
            start2++;
        }
    }

    /* const fixedColors = arr.map(item => ({ ...item, color: 'blue' })) */

    setValsArr([...arr]); // Final set for this merge step
    await delay(delayMs);
}


  

// Delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}