import { h } from "@stencil/core";
export function generateLegendTemplate(
  names: string[],
  colors: string[],
  counts: number[]
): any[] {
  const legendsTemplate = names.map((name, index) => {
    console.log(colors);
    const color = colors[index];
    return (
      <p style={{ color }}>
        <svg>
          <line
            x1="15"
            y1="15"
            x2="50"
            y2="15"
            stroke={color}
            stroke-width="7"
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
