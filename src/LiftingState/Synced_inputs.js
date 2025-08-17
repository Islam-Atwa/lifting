import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');


  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input
        label="First input"
        value={text}
        onChange={handleChange}
      />
      <Input
        label="Second input"
        value={text}
        onChange={handleChange}
      />
    </>
  );
}

function Input({ label, value, onChange}) {
  

  

  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}


// structure 
// To  solve this challange  i will need 3 step:
//  - step 1: Remove State From Child ->(Input) Components 
//  - step 2: Pass hardedcoded date from the common parent to the child components
//  - step 3 : Add a state to the common parent| and pass it down to the child components
  
