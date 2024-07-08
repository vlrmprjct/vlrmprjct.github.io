declare module '*.scss';

declare module '\*.jpg' {
    const content: string;
    export default content;
}

declare module '\*.png' {
    const content: string;
    export default content;
}

declare module "*.svg" {
    import * as React from 'react';
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
