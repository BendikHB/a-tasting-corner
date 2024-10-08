import { Iicon } from "./interface";

export const Close = ({ width, height, color, bold }: Iicon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <g id="Group_48" data-name="Group 48">
        <line
          id="Line_9"
          data-name="Line 9"
          x2={width}
          y2={height}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={bold ? "2" : "1.5"}
        />
        <line
          id="Line_10"
          data-name="Line 10"
          x1={width}
          y2={height}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={bold ? "2" : "1.5"}
        />
      </g>
    </svg>
  );
};
