import { computed } from "mobx";
import { App } from "../models/App";

export class AppViewModel {
    private readonly _app: App;

    public constructor(app: App) {
        this._app = app;
    }

    @computed
    public get text(): string {
        return this._app.directoryImages.map((imageInformation) => imageInformation.filename).join("\n");
    }
}