import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);  // Create a ref with an initial value of null

  function handleClick() {
    inputRef.current.focus();  // Use the ref to directly focus the input element
  }

  return (
    <div>
      <input type="text" ref={inputRef} />  {/* Attach the ref to the input */}
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
export default FocusInput