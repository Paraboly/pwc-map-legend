import { JSXBase } from '@stencil/core/internal';

export type RestrictedSVGStyle = JSXBase.SVGAttributes["style"] & { "stroke-width": number; };
