import React from 'react';
import { observer } from "mobx-react";

import { ImagesViewModel } from '../viewmodels/ImagesViewModel';
import { Image } from './Image';

type ImagesProps = {
    model: ImagesViewModel
}

export const Images: React.FunctionComponent<ImagesProps> = observer(({ model }) => {
    return (
        <div>
            {model.currentImage && <Image model={model.currentImage} />}
        </div>
    );
});