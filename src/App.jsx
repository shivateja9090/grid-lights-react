import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [active ,setActive ] = useState([])
  const handleClick = (item) => {
      setActive((prevActive) => [...prevActive, item]);
  };
  useEffect(() => {
    console.log("active",active.length);
    if (active.length === 8) {
      setTimeout(() => {
        const reverseOrder = [...active].reverse();
        reverseOrder.forEach((item, index) => {
          setTimeout(() => {
            setActive((prevActive) => prevActive.filter((i) => i !== item));
          }, index * 500);
        });
      }, 500);
    }
  }, [active]);
  return (
    <>
      <div className="main-container">
        <div className="row">
          <div className={`item ${active.includes(0) ? 'active' : ''}`} onClick={() => handleClick(0)}></div>
          <div className={`item ${active.includes(1) ? 'active' : ''}`} onClick={() => handleClick(1)}></div>
          <div className={`item ${active.includes(2) ? 'active' : ''}`} onClick={() => handleClick(2)}></div>
        </div>
        <div className="row">
        <div className={`item ${active.includes(3) ? 'active' : ''}`} onClick={() => handleClick(3)}></div>
          <div className={`item ${active.includes(4) ? 'active' : ''}`} onClick={() => handleClick(4)}></div>
        </div>
        <div className="row">
        <div className={`item ${active.includes(5) ? 'active' : ''}`} onClick={() => handleClick(5)}></div>
        <div className={`item ${active.includes(6) ? 'active' : ''}`} onClick={() => handleClick(6)}></div>
        <div className={`item ${active.includes(7) ? 'active' : ''}`} onClick={() => handleClick(7)}></div>
        </div>
      </div>
    </>
  );
}

export default App;
