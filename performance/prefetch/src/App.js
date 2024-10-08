import { lazy, Suspense, useState } from "react";
// import Emoji from "./Emoji";
// const Emoji = lazy(() => import(/* webpackPrefetch: true */ "./Emoji"));
const Emoji = import(/* webpackPrefetch: true */ "./Emoji");
const App = () => {
  const [showEmoji, toggleEmoji] = useState(false);
  const [emojiComp, setEmojiComp] = useState();
  const handleOpen = () => {
    Emoji.then((module) => module.default).then((component) => {
      setEmojiComp(component);
      toggleEmoji((prev) => !prev);
    });
  };
  return (
    <div>
      <h1>Prefetch React Webpack</h1>
      <button onClick={handleOpen}>Show Emoji</button>
      {/* <Suspense fallback="Loading">{showEmoji && <Emoji />}</Suspense> */}
      {showEmoji && emojiComp}
    </div>
  );
};

export default App;
