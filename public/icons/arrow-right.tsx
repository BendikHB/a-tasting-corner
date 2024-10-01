interface Iicon{
  width: number;
  height: number;
  color: string;
}

export const ArrowRight = ({width, height, color}:Iicon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" stroke={color} strokeWidth={"2px"} viewBox="0 0 48.588 10.261">
      <path id="arrow_right" data-name="arrow_right" d="M1074,2215.094h45.207l-12.993-8.422" transform="translate(-1074 -2205.833)"/>
    </svg>
  )
}


