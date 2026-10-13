import { useState } from "react";

function Counter({ printCountValue }) {

//  const result = useState(0);
// const value = result[0];
// const setValue = result[1];


 let [value, setValue] = useState(0);
  // let count = 0; //normal variable
  // printCountValue(value);
  function increment()
  {
    // count++;
    // console.log(count);
    // setValue(value++);
    setValue(( prev )=> prev + 1);
     printCountValue(++value);
    // setValue(( prev )=> prev + 1);
    // setValue(( prev )=> prev + 1);
  }

   function decrement()
  {
    //  count--;
    //   console.log(count);

        setValue((prev) => prev - 1);
        printCountValue(--value);
  }

  return (
    <div>
        <h1>Counter</h1>
        <button onClick={increment}>+</button>
        <p>{value}</p>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter