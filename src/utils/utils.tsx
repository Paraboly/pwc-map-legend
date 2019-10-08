import { h } from "@stencil/core";
export function generateLegendTemplate(
  names: string[],
  colors: string[],
  counts: number[]
): any[] {
  return names.map((name, index) => {
    return (
      <p style={{ color: colors[index] }}>
        {name}: {counts[index] || "-"}
      </p>
    );
  });
}
