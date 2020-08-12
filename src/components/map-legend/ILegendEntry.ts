import { JSXBase } from '@stencil/core/internal';

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

export interface IRoadLine {
    color: string;
    svgStyle: RestrictedSVGStyle;
}

export type RestrictedSVGStyle = JSXBase.SVGAttributes["style"] & { "stroke-width": number };