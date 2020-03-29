import React from "react";
import "./Field.css";

const Field = ({ points, coords }) => {
  //   const circles = points.map(point => {
  //       return <circle key={point.name} cx = {point.x} cy = {point.y} stroke= {point.color} fill = {point.color} stroke-width="1" r="5"/>
  //   })

  return (
    <div className="Field">
      <span className="zero">0</span>
      <span className="axisX">X</span>
      <span className="axisY">Y</span>
      <svg viewBox="0 0 1000 1000" width="500" height="500">
        <path
          id="curve"
          stroke="black"
          strokeWidth="4"
          fill="none"
          d={`M ${coords.sx}, ${coords.sx}  C  ${coords.c1x}, ${coords.c1y}, ${coords.c2x}, ${coords.c2y}, ${coords.ex}, ${coords.ey}`}
        />

        <line id="helpLine1"x1={`${coords.sx}`} y1={`${coords.sy}`}  x2={`${coords.c1x}`}  y2={`${coords.c1y}`}  stroke="green"  strokeWidth="2" />
        <line id="helpLine2" x1={`${coords.ex}`} y1={`${coords.ey}`}  x2={`${coords.c2x}`}  y2={`${coords.c2y}`}  stroke="green"  strokeWidth="2" />

        <circle
          id="startPoint"
          cx={coords.sx}
          cy={coords.sy}
          r="10"
          stroke="red"
          fill="red"
          strokeWidth="1"
        />
        <circle
          id="endPoint"
          cx={coords.ex}
          cy={coords.ey}
          r="10"
          stroke="red"
          fill="red"
          strokeWidth="1"
        />
        <circle
          id="controlPoint1"
          cx={coords.c1x}
          cy={coords.c1y}
          r="10"
          stroke="green"
          fill="green"
          strokeWidth="1"
        />
        <circle
          id="controlPoint2"
          cx={coords.c2x}
          cy={coords.c2y}
          r="10"
          stroke="green"
          fill="green"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
export default Field;
