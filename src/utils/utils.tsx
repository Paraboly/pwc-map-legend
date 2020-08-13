import { h } from "@stencil/core";
import { ILegendEntry, IRoadLine } from "../components/map-legend/ILegendEntry";

export function generateLegendTemplate(entries: ILegendEntry[]): HTMLParagraphElement[] {
  const defaultStrokeWidth = 3;
  const maxStrokeWidth = findMaxStrokeWidth(entries, defaultStrokeWidth);

  const legendsTemplate = entries.map((entry) => {
    const { name, color, count, svgStyle, overlayText, overlayTextColor, overlayTextSvgStyle, roadLines } = entry;

    const svgHeight = 20;
    const svgWidth = 50;

    const lineStrokeWidth = (svgStyle && svgStyle["stroke-width"]) || defaultStrokeWidth;

    const lineStartX = maxStrokeWidth / 2;
    const lineEndX = svgWidth - maxStrokeWidth / 2;
    const lineY = svgHeight / 2;

    return (
      <p style={{ color }}>
        <svg height={svgHeight} width={svgWidth} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
          <line
            style={svgStyle} // ! This line is important & it's order also is important! DO NOT TOUCH IT!
            x1={lineStartX}
            y1={lineY}
            x2={lineEndX}
            y2={lineY}
            elevation={30}
            stroke={color}
            stroke-width={lineStrokeWidth}
            stroke-opacity="0.5"
            stroke-linecap="round"
          />

          {...generateRoadLines(roadLines, lineStartX, lineEndX, lineY, lineStrokeWidth)}

          <text
            style={overlayTextSvgStyle}
            fill={overlayTextColor}
            alignment-baseline="central"
            text-anchor="middle"
            dominant-baseline="central"
            x="50%"
            y="50%"
          >
            {overlayText}
          </text>
        </svg>
        <strong>
          {`${name || ''} ${count ? `(${count})` : ""}`}
        </strong>
      </p>
    );
  });

  return legendsTemplate;
}

function generateRoadLines(roadLines: IRoadLine[], xStart: number, xEnd: number, yBase: number, totalHeight: number): SVGLineElement[] {
  if (!roadLines || roadLines.length < 1) {
    return [];
  }

  const lineCount = roadLines.length;
  const laneCount = lineCount + 1;
  const laneHeight = laneCount === 0 ? totalHeight : totalHeight / laneCount;
  const midpointLineIndex = (lineCount - 1) / 2;

  return roadLines.map((roadLine, index) => {
    const { color, svgStyle } = roadLine;
    const relativeIndex = index - midpointLineIndex;
    const yAdjust = laneHeight * relativeIndex;

    return (<line
      style={svgStyle}
      x1={xStart}
      y1={yBase + yAdjust}
      x2={xEnd}
      y2={yBase + yAdjust}
      stroke={color}
      stroke-width={2}
      stroke-linecap="round"
    />);
  });
}

function findMaxStrokeWidth(entries: ILegendEntry[], defaultStrokeWidth: number): number {
  if (!entries || entries.length < 1) {
    return defaultStrokeWidth;
  }

  return Math.max(...entries.map(entry => (entry.svgStyle && entry.svgStyle["stroke-width"]) || defaultStrokeWidth));
}