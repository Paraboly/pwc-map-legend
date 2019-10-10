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
  @Prop() names: string = '["Turkey", "Greece", "Italy"]';

  /**
   * Colors of the legends
   */
  @Prop() colors: string = '["red", "blue", "green"]';

  /**
   * Counts of the legends
   */
  @Prop() counts: string = '["2", "1", "0"]';

  ComponentDidLoad() {
    console.log(this);
  }

  private renderTemplate(): any[] {
    const colors = JSON.parse(this.colors);
    const names = JSON.parse(this.names);
    const counts = JSON.parse(this.counts);
    const template = generateLegendTemplate(names, colors, counts);
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
              src="../../assets/information.svg"
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
