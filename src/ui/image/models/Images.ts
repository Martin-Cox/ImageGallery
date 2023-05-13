import { action, computed, makeObservable, observable } from "mobx";
import { Image } from "./Image";

export class Images {

    @observable
    private _updateTime: string;

    @observable
    private _images: Image[] = [];

    public constructor() {
        makeObservable(this);
    }

    @action
    public async loadImagesFromDirectory(directory: string): Promise<void> {
        const images = await window.galleryAPI.getImagesInDirectory(directory);

        this._images = images.map((imageInformation) => new Image(imageInformation.filename, imageInformation.path));
        this._updateTime = new Date().toISOString();
        console.log("update updateTIme")
    }

    @computed
    public get images(): Image[] {
        return this._images;
    }

    @computed
    public get updateTime(): string {
        return this._updateTime;
    }
}