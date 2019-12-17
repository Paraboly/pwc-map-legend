import { h } from "@stencil/core";
export function generateImageIcon(
  names: string[],
  names: string[],
  colors: string[],
  counts: number[],
  icon: string[]
): any[] {
  const imageIcon = names.map((name, index) => {
    console.log(colors);
    const color = colors[index];
    return (
      <p style={{ color }}>
        <img style={} />
        <strong>
          {" "}
          {name} {counts[index] ? `(${counts[index]})` : ""}
        </strong>
      </p>
    );
  });

  return imageIcon;
}
