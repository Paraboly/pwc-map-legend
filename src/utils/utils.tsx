import { h } from "@stencil/core";
export function generateLegendTemplate(
  names: string[],
  colors: string[],
  counts: number[],
  svgStyles
): any[] {
  const legendsTemplate = names.map((name, index) => {
    console.log(colors);
    const color = colors[index];
    const svgStyle = svgStyles && svgStyles.length && svgStyles[index];
    return (
      <p style={{ color }}>
        <svg>
          <line
            style={svgStyle} // ! This line is important & it's order also is important! DO NOT TOUGH IT!
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

  return legendsTemplate;
}
