import React from 'react';
import { observer } from "mobx-react";

import { ImageViewModel } from '../viewmodels/ImageViewModel';

type ImageProps = {
    model: ImageViewModel
}

export const Image: React.FunctionComponent<ImageProps> = observer(({ model }) => {
    return (
        <img src={model.path}>
        </img>
    );
});