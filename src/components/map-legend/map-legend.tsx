import { Component, Prop, h, Watch } from "@stencil/core";
import { generateLegendTemplate } from "../../utils/utils";
import "@paraboly/pwc-tooltip";
import { ILegendEntry } from './types/ILegendEntry';
import { resolveJson } from '../../utils/resolveJson';

@Component({
  tag: "pwc-map-legend",
  styleUrl: "map-legend.css",
  shadow: false
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

  private defaultEntries: ILegendEntry[] = [];
  private resolvedEntries: ILegendEntry[];
  @Prop() entries: ILegendEntry[] | string = this.defaultEntries;
  @Watch('entries')
  entriesWatchHandler(newValue: string | ILegendEntry[]) {
    if(newValue === null || newValue === undefined) {
      this.resolvedEntries = this.defaultEntries;
    } else {
      this.resolvedEntries = resolveJson(newValue);
    }
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

  componentWillLoad() {
    this.resolvedEntries = resolveJson(this.entries);
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
