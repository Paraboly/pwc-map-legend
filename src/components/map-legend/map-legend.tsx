import { Component, Prop, h } from "@stencil/core";
import { generateLegendTemplate } from "../../utils/utils";

@Component({
  tag: "pwc-map-legend",
  styleUrl: "map-legend.css",
  shadow: true
})
export class PWCMapLegendComponent {
  /**
   * Title of the legends
   */
  @Prop() titleText: string = "Legend";

  /**
   * Description of the legend tooltip
   */
  @Prop() legendText: string = "Legend";

  /**
   * Disable the tooltip
   */
  @Prop() disableTooltip: boolean = false;

  /**
   * The name list of legends
   */
  @Prop() names: any = '["Turkey", "Greece", "Italy"]';

  /**
   * Colors of the legends
   */
  @Prop() colors: any = '["red", "blue", "green"]';

  /**
   * Counts of the legends
   */
  @Prop() counts: any = '["2", "1", "0"]';

  @Prop() svgStyles: any;

  ComponentDidLoad() {
    console.log(this);
  }

  private renderTemplate(): any[] {
    const colors =
      typeof this.colors === "string" ? JSON.parse(this.colors) : this.colors;
    const names =
      typeof this.names === "string" ? JSON.parse(this.names) : this.names;
    const counts =
      typeof this.counts === "string" ? JSON.parse(this.counts) : this.counts;
    const template = generateLegendTemplate(
      names,
      colors,
      counts,
      this.svgStyles
    );
    return template;
  }

  renderTitle() {
    return (
      <div class="flex-row legend-title-container">
        {!this.disableTooltip && (
          <div class="tooltip">
            <img
              alt="icon"
              class="icon-style "
              src="https://image.flaticon.com/icons/svg/157/157933.svg"
            />
            <div class="top">
              <h3>{this.legendText}</h3>
              <i></i>
            </div>
          </div>
        )}
        <label class="legend-title">{this.titleText}</label>
      </div>
    );
  }

  render() {
    return (
      <div class="legend-container">
        {this.renderTitle()}
        {this.renderTemplate()}
      </div>
    );
  }
}
