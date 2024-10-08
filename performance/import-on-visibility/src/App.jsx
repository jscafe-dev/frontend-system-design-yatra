import { Suspense, lazy, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Message from "./Message";
const Emoji = lazy(() => import("./Emoji"));

function App() {
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log("inView", inView);
  }, [inView]);
  return (
    <>
      <Message />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div ref={ref}>
        <Suspense fallback="Loading">{inView && <Emoji />}</Suspense>
      </div>
    </>
  );
}

export default App;
