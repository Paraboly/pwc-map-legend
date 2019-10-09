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
  @Prop() title: string;
  /**
   * The name list of legends
   */
  @Prop() names: string[];

  /**
   * Colors of the legends
   */
  @Prop() colors: string[];

  /**
   * Counts of the legends
   */
  @Prop() counts: number[];

  ComponentDidLoad() {
    console.log(this);
  }

  private getTemplate(): any[] {
    console.log(this.names);
    const template = generateLegendTemplate(
      this.names || ["Turkey", "Greece", "Italy"],
      this.colors || ["red", "blue", "green"],
      this.counts || [2, 1, 0]
    );
    console.log(template);
    return template;
  }

  render() {
    return (
      <div class="legend-container">
        {this.title && <h5 class="legend-title">{this.title}</h5>}
        {this.getTemplate()}
      </div>
    );
  }
}
