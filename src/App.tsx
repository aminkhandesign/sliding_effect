import { createRef, useState, useEffect } from "react";
import "./App.css";
import { BoxOne, BoxTwo, BoxThree } from "./components";

function App() {
  const [content, setContent] = useState([
    <BoxOne key="one" className="boxes slidebox" color="blue">
      <h2>ONE</h2>
    </BoxOne>,
    <BoxOne key="two" className="boxes" color="yellow">
      <h2>TWO</h2>
    </BoxOne>,
    <BoxOne key="three" className="boxes" color="orange">
      <h2>THREE</h2>
    </BoxOne>,
  ]);

  const slider = createRef<HTMLDivElement>(null);

  const animationCallback = (evt: AnimationEvent) => {
    console.log(evt.target);
  };

  useEffect(() => {
    const sliderRef = slider.current;
    if (sliderRef) {
      console.log("slider present in dom");
      sliderRef.addEventListener("animationend", animationCallback);
    }

    return () => {
      sliderRef?.removeEventListener("animationend", animationCallback);
    };
  }, []);

  return (
    <>
      <div ref={slider} className="container">
        {content}
      </div>
    </>
  );
}

export default App;
