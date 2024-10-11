import { useState } from "react";

function App() {
  const [showModal, toggleModal] = useState(false);
  const handleClick = () => {
    for (let i = 0; i < 10000000; i++) {
      // empty
    }
    toggleModal((prev) => !prev);
  };
  return (
    <>
      <h1>INP</h1>
      <button onClick={handleClick}>Open Modal</button>
      {showModal && <div>I am modal</div>}
    </>
  );
}

export default App;
