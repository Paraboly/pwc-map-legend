import { Component, Prop, h, Watch } from "@stencil/core";
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
  @Prop() label: string = "Legend";
  /**
   * The name list of legends
   */
  @Prop({ reflect: true }) names: string[] = ["EAST", "WEST", "TEST"];

  /**
   * Colors of the legends
   */
  @Prop({ reflect: true }) colors: string[] = ["red", "blue", "green"];

  /**
   * Counts of the legends
   */
  @Prop({ reflect: true }) counts: number[] = [2, 1, 0];

  componentDidLoad() {
    console.log(typeof this.names, ":", this.names);
    // console.log(this.label);
    // console.log(this.names);
    // console.log(this.colors);
    // console.log(this.counts);
  }

  @Watch("label")
  watchHandler(newValue: boolean, oldValue: boolean) {
    console.log("The old value of activated is: ", oldValue);
    console.log("The new value of activated is: ", newValue);
  }

  private getTemplate(): any[] {
    const template = generateLegendTemplate(
      this.names,
      this.colors,
      this.counts
    );

    return template;
  }

  render() {
    return (
      <div class="legend-container">
        {this.label && <h5 class="legend-title">{this.label}</h5>}
        {this.getTemplate()}
      </div>
    );
  }
}
