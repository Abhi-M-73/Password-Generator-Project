import React, { useEffect, useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false); // New state for the copied message

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*?/:<>~";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length); 
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  // Function to handle copy and show the message
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true); // Show the copied message

    // Hide the copied message after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className='h-screen w-full flex flex-col gap-10 items-center justify-center'>
      <h1 className='text-4xl font-semibold'>Password Generator</h1>
      <div className='max-w-screen-xl mx-auto px-10 py-10 bg-violet-400 rounded-md'>
        <div className='flex border-[3px] border-black rounded-md'>
          <input className='outline-none w-96' type="text" readOnly value={password} />
          <button
            className='px-5 py-2 bg-black text-white'
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        
        {/* Conditionally show the copied message */}
        {copied && <p className="text-green-500 mt-2">Text Copied!</p>}
        
        <div className='mt-5 flex gap-5 font-semibold'>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(event) => setLength(event.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex gap-10 font-semibold items-center'>
          <div className='mt-5 flex gap-2'>
            <input
              type="checkbox"
              checked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="Number">Include Numbers</label>
          </div>
          <div className='mt-5 flex gap-2'>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="Character">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
