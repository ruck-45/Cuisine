declare module "./src/**/*.jpg"{
    const content: string;
    export default content;
};

declare module "./src/**/*.png"{
    const content: string;
    export default content;
};


declare module "*.mp4" {
    export const ReactComponent: React.MediaHTMLAttributes<HTMLVideoElement>;
  const src: string;
  export default src;
}

declare module "./src/**/*.svg" {
  import * as React from "react";

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
};