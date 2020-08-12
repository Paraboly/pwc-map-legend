import { Component, Prop, h, Watch } from "@stencil/core";
import { generateLegendTemplate } from "../../utils/utils";
import "@paraboly/pwc-tooltip";
import { ILegendEntry } from './ILegendEntry';

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
   * Disable the title
   */
  @Prop() disableTitle: boolean = false;

  @Prop() tooltipProps: any;

  private resolvedEntries: ILegendEntry[];
  @Prop() entries: ILegendEntry[] | string;
  @Watch('entries')
  watchHandler(newValue) {
    this.resolvedEntries = typeof newValue === "string" ? JSON.parse(newValue) : newValue;
  }

  componentWillLoad() {
    this.resolvedEntries = typeof this.entries === "string" ? JSON.parse(this.entries) : this.entries;
  }

  private renderTemplate(): any[] {
    return generateLegendTemplate(
      this.resolvedEntries
    );
  }

  private renderTitle() {
    return (!this.disableTitle && (
      <div class="flex-row legend-title-container">
        {!this.disableTooltip && (
          <pwc-tooltip tooltip-alignment="top" tooltip-text={this.legendText}>
            <slot></slot>
          </pwc-tooltip>
        )}
        <label class="legend-title">{this.titleText}</label>
      </div >
    )
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
