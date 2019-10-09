import { h } from "@stencil/core";
export function generateLegendTemplate(
  names: string[],
  colors: string[],
  counts: number[]
): any[] {
  const legendsTemplate = names.map((name, index) => {
    const color = colors[index];
    return (
      <p style={{ color }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <line
            x1="15"
            y1="15"
            x2="70"
            y2="15"
            stroke-width="10"
            stroke-linecap="round"
            stroke={color}
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
