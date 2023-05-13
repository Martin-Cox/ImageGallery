import React from 'react';
import { createRoot } from 'react-dom/client';
import { observer } from "mobx-react";

import { App as AppModel } from '../models/App';
import { AppViewModel } from "../viewmodels/AppViewModel";

type AppProps = {
    model: AppViewModel
}

const App: React.FunctionComponent<AppProps> = observer(({ model }) => {
    return (
        <>
            <h1>{model.text}</h1>
        </>
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
