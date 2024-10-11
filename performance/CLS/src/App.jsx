import { useState, useEffect } from "react";

function App() {
  const [showAds, toggleAds] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      toggleAds(true);
    }, 100);
  }, []);
  return (
    <>
      <h1>CLS</h1>

      <div style={{ height: "500px" }}>
        {showAds && (
          <img src="https://rarjh9ldquohoi50.public.blob.vercel-storage.com/cat-500-qFjiS0w5QlkcWjA6dnyijf9tqqyEuW.jpeg" />
        )}
      </div>

      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    </>
  );
}

export default App;
