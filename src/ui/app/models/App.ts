import { action, computed, observable } from "mobx";
import { ImageInformation } from "../../../engine/FileManager";

export class App {
    @observable
    private _directoryImages: ImageInformation[] = [];

    public constructor() {
        this._loadImagesInTestDirectory();
    }

    @computed
    public get directoryImages(): ImageInformation[] {
        return this._directoryImages;
    }

    @action
    private async _loadImagesInTestDirectory(): Promise<void> {
        this._directoryImages = await window.galleryAPI.getImagesInDirectory("O:\TEST");
    }
}