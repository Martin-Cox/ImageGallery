import React from 'react';
import { createRoot } from 'react-dom/client';
import { observer } from "mobx-react";

import { App as AppModel } from '../models/App';
import { AppViewModel } from "../viewmodels/AppViewModel";
import { Images } from '../../../ui/image/components/Images';

type AppProps = {
    model: AppViewModel
}

const App: React.FunctionComponent<AppProps> = observer(({ model }) => {
    return (
        <div className="image-viewer" tabIndex={1} onKeyDown={(event) => model.onKeydown(event)}>
            <Images model={model.imagesViewModel} />
            <div className="control-panel" />
        </div>
    )
});

function render() {
    const app = new AppModel();
    const appViewModel = new AppViewModel(app);
    const appContainer = document.getElementById("app");
    const root = createRoot(appContainer!);

    root.render(<App model={appViewModel} />);
}

render();
