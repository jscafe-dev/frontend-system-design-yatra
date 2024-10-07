import { useState, lazy, Suspense } from "react";
// import Emoji from "./Emoji";
import Message from "./Message";

const Emoji = lazy(() => import("./Emoji"));

function App() {
  const [showEmoji, toggleEmoji] = useState(false);

  return (
    <>
      <Message />
      <button onClick={() => toggleEmoji((prev) => !prev)}>Show Emoji</button>
      {showEmoji && (
        <Suspense fallback="Loading">
          <Emoji />
        </Suspense>
      )}
    </>
  );
}

export default App;
