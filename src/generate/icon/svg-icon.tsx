import { h } from "@stencil/core";
export function generateSvgIcon(
  names: string[],
  colors: string[],
  counts: number[],
  icon: string[]
): any[] {
  const svgIcon = names.map((name, index) => {
    console.log(colors);
    const color = colors[index];
    return (
      <p style={{ color }}>
        <svg>
          <line
            style={svgStyle} // ??
            x1="15"
            y1="15"
            x2="50"
            y2="15"
            elevation={30}
            stroke={color}
            stroke-width="3"
            stroke-opacity="0.5"
            stroke-linecap="round"
          />
        </svg>
        <strong>
          {" "}
          {name} {counts[index] ? `(${counts[index]})` : ""}
        </strong>
      </p>
    );
  });

  return svgIcon;
}
