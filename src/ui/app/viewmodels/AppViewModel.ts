import { action, computed } from "mobx";
import { App } from "../models/App";
import { ImagesViewModel } from "../../../ui/image/viewmodels/ImagesViewModel";

export class AppViewModel {
    private readonly _app: App;

    private readonly _imagesViewModel: ImagesViewModel;

    public constructor(app: App) {
        this._app = app;
        this._imagesViewModel = new ImagesViewModel(app.images);
    }

    @computed
    public get imagesViewModel(): ImagesViewModel {
        return this._imagesViewModel;
    }

    @action
    public onKeydown(event: React.KeyboardEvent): void {
        switch(event.key) {
            case "ArrowLeft":
            case "ArrowUp":
                event.preventDefault();
                this.imagesViewModel.previousImage();
                break;
            case "ArrowRight":
            case "ArrowDown":
                event.preventDefault();
                this.imagesViewModel.nextImage();
                break;
            case "Delete":
            case "Backspace":
                event.preventDefault();
                this._imagesViewModel.deleteCurrentImage();
        }
    }
}