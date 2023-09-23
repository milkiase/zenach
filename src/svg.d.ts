// declare module "*.svg" {
//     import * as React from "react";
//     const ReactComponent: React.FunctionComponent<
//         React.SVGProps<SVGSVGElement> & { title?: string }
//     >;
//     export const ReactComponent;
// } 

declare module "*.svg"{
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}