import React from "react";
import { MouseParallax } from "react-just-parallax";

const dots = () => {
  const calCenter = (xy) => {
    return xy * 0.1;
  };
  const generateMatrix = (size) => {
    const matrix = [];

    for (let i = 0; i < size; i++) {
      matrix[i] = [];
      for (let j = 0; j < size; j++) {
        // Determine the minimum distance to an edge
        const minDistance = Math.min(i, j, size - 1 - i, size - 1 - j);
        // Set values to increase towards the center
        matrix[i][j] = minDistance + 1;
      }
    }

    return matrix;
  };
  const size = 9; // Dimension of the matrix
  const matrixArr = generateMatrix(size);
  return (
    <div className="flex flex-col gap-5 md:gap-12 lg:gap-16">
      {matrixArr.map((x, i) => (
        <div key={i} className="flex gap-5  md:gap-12 lg:gap-16 ml-24">
          {x.map((y, i) => (
            <div key={i}>
              <MouseParallax strength={calCenter(y)} shouldPause={true}>
                <div className="dot blur-xl brightness-200 invert"></div>
              </MouseParallax>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default dots;
