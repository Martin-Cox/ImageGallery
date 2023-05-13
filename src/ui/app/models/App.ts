import { action, computed, observable } from "mobx";
import { Images } from "../../../ui/image/models/Images";

export class App {
    private readonly _images: Images;

    public constructor() {
        this._images = new Images();
        this._loadImagesInTestDirectory();
    }

    @computed
    public get images(): Images {
        return this._images;
    }

    @action
    private async _loadImagesInTestDirectory(): Promise<void> {
        this._images.setDirectory("O:\TEST");
    }
}