import { IRoadLine } from './IRoadLine';
import { RestrictedSVGStyle } from './RestrictedSVGStyle';

export interface ILegendEntry {
    name: string;
    color: string;
    count: number;
    svgStyle: RestrictedSVGStyle;
    overlayText: string;
    overlayTextColor: string;
    overlayTextSvgStyle: RestrictedSVGStyle;
    roadLines: IRoadLine[];
}
