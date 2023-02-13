import { useEffect, useState } from "react";
import { positions } from "./constants/positions";

export const App = () => {
  const [positionIndex, setPositionIndex] = useState(0);
  const champion = positions.find((pos) => pos.name === "michelangelo");

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndex((prev) =>
        prev + 1 === champion?.idle.length ? 0 : prev + 1
      );
    }, 120);
    return () => {
      clearInterval(interval);
    };
  }, [champion?.idle.length]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "calc(1920px / 1.5)",
          height: "calc(1080px / 1.5)",
          backgroundImage: "url(/backgrounds/first.jpg)",
          backgroundSize: "contain",
        }}
      >
        <div
          style={{
            marginTop: "320px",
            height: "calc(42px * 6)",
            width: "calc(40px * 6)",
          }}
        >
          <div
            style={{
              height: "calc(42px * 6)",
              width: "calc(40px * 6)",
              backgroundImage:
                "url(champions/michelangelo/michelangelo-sprites.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: `${champion?.idle[positionIndex]?.x}px`,
              backgroundPositionY: `${champion?.idle[positionIndex]?.y}px`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
