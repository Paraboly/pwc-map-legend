import { h } from "@stencil/core";
export function generateLegendTemplate(
  names: string[],
  colors: string[],
  counts: number[],
  icons: string[]
): any[] {
  const legendsTemplate = names.map((name, index) => {
    const color = colors[index];
    const icon = icons[index];

    console.log(icon);
    if (icon) {
      if (icon.type === "svg") {
        return (
          <p style={{ color }}>
            <svg>
              <line
                style={icon.properties} // ! This line is important & it's order also is important! DO NOT TOUGH IT!
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
      } else if (icon.type === "image") {
        return (
          <p style={{ color }}>
            <img
              style={{
                height: "23px",
                margin: "5px 23px -3px 23px" ;
              }}
              src={icon.properties.src}
            />
            <strong>
              {" "}
              {name} {counts[index] ? `(${counts[index]})` : ""}
            </strong>
          </p>
        );
      } else return null;
    } else return null;
  });

  return legendsTemplate;
}
